import Image, { ImageProps as Props } from 'next/image';

export type ImageProps = Props & {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default ({ src, alt, width, height, ...props }: ImageProps) => (
  <Image alt={alt} height={height} src={src} width={width} {...props} />
);
