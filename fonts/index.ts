import localFont from "next/font/local";
import { Baskervville_SC } from "next/font/google";

// ✅ Google font (correct)
export const baskerville = Baskervville_SC({
  subsets: ["latin"],
  variable: "--font-baskerville",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ✅ Local fonts
export const ClashDisplay = localFont({
  src: [
    { path: "./ClashDisplay/ClashDisplay-Extralight.otf", weight: "200" },
    { path: "./ClashDisplay/ClashDisplay-Light.otf", weight: "300" },
    { path: "./ClashDisplay/ClashDisplay-Regular.otf", weight: "400" },
    { path: "./ClashDisplay/ClashDisplay-Medium.otf", weight: "500" },
    { path: "./ClashDisplay/ClashDisplay-Semibold.otf", weight: "600" },
    { path: "./ClashDisplay/ClashDisplay-Bold.otf", weight: "700" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const ClashGrotesk = localFont({
  src: [
    {
      path: "./ClashGrotesk/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
  display: "swap",
});