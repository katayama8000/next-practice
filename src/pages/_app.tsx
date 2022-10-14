import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
