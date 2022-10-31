import 'src/lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { TButton } from 'src/lib/TButton';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <div className='ml-[100px] mt-10'>
        <TButton
          color='yellow'
          onClick={() => {
            push('/');
          }}
        >
          TOP
        </TButton>
      </div>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
              <main className='m-auto mt-10 max-w-6xl'>
                <Component {...pageProps} />
              </main>
            </NotificationsProvider>
          </MantineProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
