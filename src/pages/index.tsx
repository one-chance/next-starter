import { Button, Text } from '@components/Common';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';

// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Next Starter</title>
        <meta content="Next starter" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Button onClick={() => router.push(`/test`)}>
        <Text>언어 변경</Text>
      </Button>

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{` `}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a className={styles.card} href="https://nextjs.org/docs">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a className={styles.card} href="https://nextjs.org/learn">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          className={styles.card}
          href="https://github.com/vercel/next.js/tree/canary/examples"
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          className={styles.card}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </>
  );
};

export default Home;
