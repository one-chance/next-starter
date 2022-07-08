import { CSSObject } from '@emotion/react';
import GlobalStyles from '@styles/GlobalStyles';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

import Footer from './Footer';
import Header from './Header';

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const mainCSS: CSSObject = {
  minWidth: `100vw`,
  minHeight: `100vh`,
  padding: `4rem 0`,
  flex: 1,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
};

export default ({ children }: Props) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
