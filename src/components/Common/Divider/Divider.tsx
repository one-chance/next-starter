import { CSSObject, jsx } from '@emotion/react';
import { HTMLAttributes } from 'react';

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  size?: number;
  margin: number;
  color?: string;
  round?: boolean;
};

export default ({ size, margin, color, round, ...props }: DividerProps) => {
  const css: CSSObject = {
    border: `none`,
    backgroundColor: color || `#000000`,
    borderRadius: round ? `10px` : undefined,
    width: `100%`,
    height: size || `1px`,
    margin: `${margin}px 0`,
  };

  return jsx(`hr`, { css, ...props });
};
