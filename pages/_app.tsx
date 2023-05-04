import type { AppProps } from "next/app";
import "../styles/tailwind.css";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const spacegrotesk = Space_Grotesk({
 display: "swap",
 subsets: ["latin-ext"],
 preload: true,
 variable: "--font-default",
});

export default function MyApp({ Component, pageProps }: AppProps) {
 return (
  <main className={spacegrotesk.className}>
   <Component {...pageProps} />
   <Analytics />
  </main>
 );
}
