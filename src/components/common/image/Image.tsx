import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

const Image: React.FC<ImageProps> = props => {
  const { src, fallback, width, ...rest } = props;
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };
  if (!src || error) {
    return fallback;
  }
  return <img src={src} {...rest} width={width} onError={handleImageError} />;
};

export default Image;
