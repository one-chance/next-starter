import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

const Test: NextPage = () => (
  <div>
    <h1>Hello Next.js</h1>
    <p>
      This is a simple example of a Next.js App.
      <br />
      <br />
      <a href="https://nextjs.org/docs">Read the docs</a> to learn more.
    </p>
  </div>
);

export default Test;
