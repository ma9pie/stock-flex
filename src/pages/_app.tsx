import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { initializeGA, trackPageView } from '@/utils';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Init GA
  useEffect(() => {
    initializeGA();
  }, []);

  // 페이지 view 추적
  useEffect(() => {
    trackPageView(router.pathname);
  }, [router.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps}></Component>
    </QueryClientProvider>
  );
};

export default App;
