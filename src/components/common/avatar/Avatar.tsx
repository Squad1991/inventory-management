import React from 'react';

interface AvatarProps {
  imageUrl: string;
  altText: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = 30 }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original${imageUrl}`}
      alt={altText}
      style={{ width: size, height: size, borderRadius: '50%' }}
    />
  );
};

export default Avatar;
