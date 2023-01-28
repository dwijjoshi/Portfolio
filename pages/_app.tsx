import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);

  React.useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    // Returning null will prevent the component from rendering, so the content will simply be missing from
    // the server HTML and also wont render during the first client-side render.
    return null;
  } else {
    return <Component {...pageProps} />;
  }
}
