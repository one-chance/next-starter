import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default ({ alt, ...props }: ImageProps) => <img alt={alt} {...props} />;
