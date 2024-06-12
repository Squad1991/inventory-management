import React, { useState } from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

const Image: React.FC<ImageProps> = props => {
  const { src, fallback = <EmptyCard message={'Image Not Available'} />, width, ...rest } = props;
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };
  if (!src || error) {
    return fallback;
  }
  return <img src={src} {...rest} width={width} onError={handleImageError} />;
};

export default React.memo(Image);
