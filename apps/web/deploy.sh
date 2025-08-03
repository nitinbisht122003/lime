#!/bin/bash

# function to log the output based on type
log() {
  local type=$1
  local message=$2
  local timestamp=$(date +"%Y-%m-%d %H:%M:%S")

  local red="\033[0;31m"
  local green="\033[0;32m"
  local yellow="\033[0;33m"
  local reset="\033[0m"

  echo ""
  
  case $type in
    "error")
      echo -e "${red}[ERROR] $timestamp: $message${reset}"
      ;;
    "info")
      echo -e "${green}[INFO] $timestamp: $message${reset}"
      ;;
    "warning")
      echo -e "${yellow}[WARNING] $timestamp: $message${reset}"
      ;;
    *)
      echo "$message"
      ;;
  esac

  echo ""
}

# check first argument to be dev, stage or prod
if [ "$1" != "dev" ] && [ "$1" != "stage" ] && [ "$1" != "prod" ]; then
  log "error" "Invalid environment. Please provide a valid environment: dev, stage or prod."
  exit 1
fi

# variables
ENV=$1
APP_NAME="limeroad-web"
APP_DIR="${PWD}"
DEPLOYMENT_COMMIT_ID_FILE="$APP_DIR/last_deployment_commit_id.txt"
RE_DEPLOY=false

# redeploy the app if --re-deploy flag is passed
if [ "$3" == "--re-deploy" ]; then
  RE_DEPLOY=true
fi

# static assets
STATIC_ASSETS_DIR="$APP_DIR/.next/static"
S3_BUCKET="limeroad-prod"
S3_BUCKET_PATH="lr-v3/_next/static"

# git branch from second argument or default to main
BRANCH=${2:-main}

# last successful deployment commit id
LAST_DEPLOYMENT_COMMIT_ID=$(cat $DEPLOYMENT_COMMIT_ID_FILE 2>/dev/null)
LATEST_COMMIT_ID=""

# function to check is dev environment
is_dev() {
  if [ "$ENV" == "dev" ]; then
    return 0
  fi

  return 1
}

# function to check is stage environment
is_stage() {
  if [ "$ENV" == "stage" ]; then
    return 0
  fi

  return 1
}

# function to check is prod environment
is_prod() {
  if [ "$ENV" == "prod" ]; then
    return 0
  fi 

  return 1
}

# function to run a command and exit if it fails
run() {
  "$@"
  code=$?
  if [ $code -ne 0 ]; then
    log "error" "Command failed with exit code $code: $*"
    exit 1
  fi
}

# function to get the latest git changes
get_git_changes() {
  log "info" "Getting the latest git changes..."

  # fetch the latest changes
  run git fetch

  # checkout the branch
  run git checkout $BRANCH

  # pull the latest changes
  run git pull origin $BRANCH

  # get the latest commit id
  LATEST_COMMIT_ID=$(run git rev-parse HEAD)

  # if re-deploy flag is passed, deploy regardless of changes
  if $RE_DEPLOY; then
    return
  fi

  # check if the latest commit id is the same as the last successful deployment commit id
  if [ "$LATEST_COMMIT_ID" == "$LAST_DEPLOYMENT_COMMIT_ID" ]; then
    log "info" "No new changes to deploy."
    exit 0
  fi
}

# function to check if package-lock.json has changed
package_lock_changed() {
  # if first deployment, package-lock.json has changed
  if [ -z "$LAST_DEPLOYMENT_COMMIT_ID" ]; then
    return 0
  fi

  local CHANGED_FILES=$(run git diff --name-only $LAST_DEPLOYMENT_COMMIT_ID..HEAD)

  if echo "$CHANGED_FILES" | grep -q "package-lock.json"; then
    return 0
  fi

  return 1
}

# function to install dependencies
install_dependencies() {
  if package_lock_changed; then
    log "info" "Installing dependencies..."
    run pnpm install
  fi
}

# function to build the app
build_app() {
  if is_dev; then
    log "info" "Skipping build for dev environment."
    return
  fi

  log "info" "Building the app using $ENV environment..."
  
  # build the app
  run pnpm build
}

# function to upload static assets to s3 using aws cli
uplaod_static_assets() {
  if is_dev || is_stage; then
    log "info" "Skipping upload of static assets for dev/stage environment."
    return
  fi

  log "info" "Copying static assets to S3..."

  # copy the static assets to s3
  run aws s3 cp --recursive --cache-control 'max-age=31536000' --acl public-read $STATIC_ASSETS_DIR s3://$S3_BUCKET/$S3_BUCKET_PATH
}

# function to check app running
app_running() {
  local APP_STATUS=$(run pm2 status | grep $APP_NAME)
  local APP_RUNNING=$(echo $APP_STATUS | grep "online")

  if [ -n "$APP_RUNNING" ]; then
    return 0
  fi

  return 1
}

# function to start the app using pm2
start_app() {
  local start_cmd=""

  case $ENV in
    "dev")
      start_cmd="run dev"
      ;;
    "stage")
      start_cmd="start"
      ;;
    "prod")
      start_cmd="start"
      ;;
  esac

  if app_running; then
    log "info" "Restarting the app..."
    run pm2 restart $APP_NAME
  else
    log "info" "Starting the app..."
    run pm2 start pnpm --name $APP_NAME -- $start_cmd
  fi

  # save the process list
  run pm2 save

  if ! app_running; then
    log "error" "Failed to start the app."
    exit 1
  fi
}

# function to udpate the last successful deployment commit id
update_deployment_commit_id() {
  # create the file if it doesn't exist
  if [ ! -f $DEPLOYMENT_COMMIT_ID_FILE ]; then
    touch $DEPLOYMENT_COMMIT_ID_FILE
  fi
  echo $LATEST_COMMIT_ID > $DEPLOYMENT_COMMIT_ID_FILE
}

# function to deploy to a specific environment
deploy() {
  if is_prod; then
    log "error" "Production deployment is not allowed."
    exit 1
  fi

  log "info" "Deploying $APP_NAME to $ENV environment..."
  
  cd $APP_DIR

  get_git_changes
  
  install_dependencies

  build_app

  uplaod_static_assets

  start_app

  update_deployment_commit_id

  log "info" "Deployment to $ENV environment completed successfully."
}

# deploy to the environment
deploy