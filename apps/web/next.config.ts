import type { NextConfig } from "next";
import { withGluestackUI } from "@gluestack/ui-next-adapter";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig: NextConfig = {
  basePath: "/frontend",
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@app/features",
    "@app/services",
    "@app/ui",
    "nativewind",
    "react-native-css-interop",
    "react-native-reanimated",
    "@gluestack-ui"
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  /** Optimizations for better code splitting and bundle size */
  experimental: {
    optimizePackageImports: [
      "@app/features",
      "@app/services",
      "@app/ui",
      "@gluestack-ui",
      "react-native-reanimated"
    ]
  },

  /** image optimization */
  images: {
    loader: "custom",
    loaderFile: "./src/utils/image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.junaroad.com"
      }
    ]
  }
};

export default withBundleAnalyzer(withGluestackUI(nextConfig));
