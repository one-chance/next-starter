import { CSSObject } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fit?: boolean;
};

export default ({ type = `button`, fit, ...props }: ButtonProps) => {
  const css: CSSObject = {
    backgroundColor: `unset`,
    border: `none`,
    outline: `none`,
    padding: 0,
    display: `inline-flex`,
    justifyContent: `center`,
    alignItems: `center`,
    transition: `filter 0.3s, background 0.3s`,
    ':not(:disabled)': {
      cursor: `pointer`,
    },
    ':hover': {
      filter: `brightness(85%)`,
    },
    ':active': {
      filter: `brightness(100%)`,
    },
    ':disabled': {
      filter: `opacity(50%)`,
      pointerEvents: `none`,
    },
  };

  return (
    <button
      css={{ ...((fit && { width: `fit-content` }) || {}), ...css }}
      type={type}
      {...props}
    />
  );
};
