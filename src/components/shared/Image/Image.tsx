type ImageProps = {
  src: string;
  title?: string;
};

export const Image = ({
  src,
  title,
  ...rest
}: ImageProps) => {
  return (
    <a href={src} className='image-wrapper'>
      {
        title &&
        <h5>{title}</h5>
      }
      <img src={src} {...rest} />
    </a>
  );
};
