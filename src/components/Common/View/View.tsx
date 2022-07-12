import { jsx } from '@emotion/react';
import { forwardRef, HTMLAttributes } from 'react';

export type ViewProps = HTMLAttributes<HTMLDivElement> & {
  component?: string;
};

export default forwardRef<HTMLDivElement, ViewProps>(
  ({ component = `div`, ...props }: ViewProps, ref) =>
    jsx(component, { ref, ...props }),
);
