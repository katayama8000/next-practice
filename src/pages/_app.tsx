import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import { TButton } from "src/lib/TButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <div className="ml-[100px] mt-10">
        <Link href="/">
          <TButton color="yellow">TOP</TButton>
        </Link>
      </div>
      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <main className="m-auto mt-10 max-w-6xl">
            <Component {...pageProps} />
          </main>
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
