import { CSSObject } from '@emotion/react';
import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const css: CSSObject = {
  border: `none`,
  outline: `none`,
  background: `none`,
  lineHeight: `30px`,
  //   color: 'currentColor',
  //   fontSize: FontSizes.medium,
  //   '::placeholder': {
  //     color: TextColors.textLight
  //   },
  boxSizing: `content-box`,
  WebkitTapHighlightColor: `transparent`,
  minWidth: 0,
  '&:-webkit-autofill': {
    // WebkitTextFillColor: TextColors.text,
    transition: `background-color 5000s ease-in-out 0s`,
  },
  '&::-webkit-search-decoration': {
    // Remove the padding when type=search.
    appearance: `none`,
  },
  ':focus': {
    outline: 0,
  },
};

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} css={css} {...props} />
));
