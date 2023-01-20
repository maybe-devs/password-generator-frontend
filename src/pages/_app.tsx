import type { AppProps } from 'next/app';
import { GlobalStyle } from '../global/styles/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
