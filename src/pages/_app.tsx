import '../styles/globals.css';
import { Layout } from '@components/Layout';
import GlobalStyles from '@styles/GlobalStyles';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
