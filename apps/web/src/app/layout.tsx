import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { CriticalStyles } from "@/components/critical-styles";
import StyledJsxRegistry from "@/components/registry";
import { priorityHints } from "@/utils/priority-hints";

import "./global.css";

import { onAppBoot } from "@/utils/boot";

import { GlobalProvider } from "@app/features/limeroad/providers/global";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

onAppBoot();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  priorityHints();

  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        {/* {process.env.NODE_ENV === "development" && (
          // react-scan is only available in development mode
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
        )} */}
        <CriticalStyles />
      </head>
      <body className={`${hankenGrotesk.variable}`}>
        <StyledJsxRegistry>
          <GlobalProvider>{children}</GlobalProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Limeroad",
  description: "Description here"
};
