import { HTMLAttributes, DetailedHTMLProps } from 'react';

import Footer from './Footer';
import Header from './Header';

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
