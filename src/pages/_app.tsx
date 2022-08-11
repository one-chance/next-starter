import '../styles/globals.css';
import { Layout } from '@components/Layout';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
