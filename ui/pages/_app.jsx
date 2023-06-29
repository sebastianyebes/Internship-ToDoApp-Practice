import "styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { ReduxProvider } from "../lib/redux/provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head}>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </PlasmicRootProvider>
  );
}
