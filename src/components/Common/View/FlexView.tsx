import { CSSObject } from '@emotion/react';
import { forwardRef } from 'react';

import View, { Props as ViewProps } from './View';

export type Props = ViewProps & {
  fill?: boolean;
  row?: boolean;
  center?: boolean;
  wrap?: boolean;
  fixed?: boolean;
  gap?: number;
  content?: 'start' | 'end' | 'center' | 'between' | 'around';
  items?: 'start' | 'end' | 'center';
};

const justifyContents = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
};

const alignItems = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
};

const fixedCSS: CSSObject = {
  position: `fixed`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

const defaultCSS: CSSObject = {
  display: `flex`,
};

// eslint-disable-next-line react/display-name
export default forwardRef<HTMLDivElement, Props>(
  (
    { fill, row, content, items, center, fixed, wrap, gap, ...props }: Props,
    ref,
  ) => {
    const css: CSSObject = {
      ...defaultCSS,
      ...(fill && { flex: 1 }),
      ...((row && { flexDirection: `row` }) || { flexDirection: `column` }),
      ...(center && { justifyContent: `center`, alignItems: `center` }),
      ...(content && { justifyContent: justifyContents[content] }),
      ...(items && { alignItems: alignItems[items] }),
      ...(fixed && fixedCSS),
      ...(wrap && { flexWrap: `wrap` }),
      ...(gap && { gap }),
    };

    return <View ref={ref} css={css} {...props} />;
  },
);
