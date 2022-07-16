import Link, { LinkProps as Props } from 'next/link';
import { ReactNode } from 'react';

export type LinkProps = Props & {
  href: string;
  children?: ReactNode;
};

export default ({ href, children }: LinkProps) => (
  <Link href={href} passHref>
    {children}
  </Link>
);
