import baseConfig from "@app/postcss-config/base";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    ...baseConfig.plugins,
    tailwindcss: {}
  }
};

export default config;
