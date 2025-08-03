import { LrApiEnv } from "@app/services/limeroad/env";

export function onAppBoot() {
  console.log("App is booting...");

  LrApiEnv.configure({
    API_URL: process.env.NEXT_PUBLIC_LR_API_URL
  });

  console.log("App booted successfully.");
}
