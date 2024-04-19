import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {NFTProvider} from '../context/NFTContext'
import { Navbar, Footer } from "@/components/index";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // this is for dark and light themes
    <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
        <Component {...pageProps} />
        </div>        

        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/b260d03c30.js" crossOrigin="anonymous" />
    </ThemeProvider>
    </NFTProvider>
  );
}
