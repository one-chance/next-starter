import { CSSObject, jsx } from '@emotion/react';
import { colors, fontSizes, fontWeights } from '@styles/Theme';
import { HTMLAttributes, LabelHTMLAttributes } from 'react';

export type Props = (
  | HTMLAttributes<HTMLSpanElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  black?: boolean;
  color?: string;
  start?: boolean;
  center?: boolean;
  fill?: boolean;
  noDrag?: boolean;
  oneLine?: boolean;
};

export default ({
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  light,
  medium,
  semiBold,
  bold,
  black,
  color,
  start,
  center,
  fill,
  noDrag,
  oneLine,
  ...props
}: Props) => {
  const css: CSSObject = {
    // fontFamily: `Noto Sans KR`,
    ...colors[color || `black`],
    ...fontSizes[
      (xxSmall && `xxSmall`) ||
        (xSmall && `xSmall`) ||
        (small && `small`) ||
        (large && `large`) ||
        (xLarge && `xLarge`) ||
        (xxLarge && `xxLarge`) ||
        `medium`
    ],
    ...fontWeights[
      (light && `light`) ||
        (medium && `medium`) ||
        (semiBold && `semiBold`) ||
        (bold && `bold`) ||
        (black && `black`) ||
        `regular`
    ],
    ...(start && { textAlign: `left` }),
    ...(center && { textAlign: `center` }),
    ...(fill && { flex: 1 }),
    ...(noDrag && { userSelect: `none` }),
    ...(oneLine && {
      whiteSpace: `nowrap`,
      textOverflow: `ellipsis`,
      overflow: `hidden`,
    }),
  };

  return jsx(`span`, { css, ...props });
};
