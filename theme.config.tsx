import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logo from "./public/logo.svg";

const config: DocsThemeConfig = {
 logo: (
  <>
   <Image src={logo} alt="logo" width={32} height={32} />
   <span className="text-lg md:text-xl ml-3">Documentation</span>
  </>
 ),
 project: {
  link: "https://github.com/limegorilla/docs",
 },
 chat: {
  link: "https://discord.com",
 },
 docsRepositoryBase: "https://github.com/limegorilla/docs",
 footer: {
  text: "Liam Doyle | limegorilla - Documentation",
 },
 useNextSeoProps() {
  return {
   titleTemplate: "%s – SWR",
  };
 },
 banner: {
  text: "🏔️ This site is in beta!",
 },
 faviconGlyph: "🦍",
 primaryHue: 144,
};

export default config;
