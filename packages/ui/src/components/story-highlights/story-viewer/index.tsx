import type { ComponentPropsWithVariants } from "../../../types";
import { Drawer, DrawerContent } from "../../../components/drawer";
import { storyViewerStyle } from "./styles";

type IStoryViewerProps = ComponentPropsWithVariants<typeof Drawer, typeof storyViewerStyle>;

export function StoryViewer({
  className,
  size = "full",
  anchor = "bottom",
  children,
  ...props
}: IStoryViewerProps) {
  return (
    <Drawer {...props} size={size} anchor={anchor}>
      <DrawerContent className={storyViewerStyle({ class: className })}>{children}</DrawerContent>
    </Drawer>
  );
}

export { StoryProgressContainer, StoryProgressBar, StoryProgressIndicator } from "./story-progress";

export {
  StoryHeader,
  StoryTimeStamp,
  StoryUserAvatar,
  StoryUserInfo,
  StoryUserName,
  StoryCloseButton
} from "./story-header";

export { StoryContent, StoryContentImage } from "./story-content";

export { StoryControls, StoryTouchArea } from "./story-controls";

export { StoryFooter } from "./story-footer";
