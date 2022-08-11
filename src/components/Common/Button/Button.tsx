import { CSSObject, jsx } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
  fit?: boolean;
  color?: string;
};

export default ({ type, fit, color, ...props }: ButtonProps) => {
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
    ...(fit && { width: `fit-content` }),
    ...(color && { backgroundColor: color }),
  };

  return jsx(`button`, { type: type || `button`, css, ...props });
};
