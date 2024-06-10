import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import MoviePoster from '~src/components/movie-poster/MoviePoster';

interface AvatarProps {
  imageUrl: string;
  altText: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = 30 }) => {
  return (
    <MoviePoster
      width={size}
      height={size}
      src={imageUrl}
      alt={altText}
      fallback={<FaUserCircle size={size} />}
      style={{ width: size, height: size, borderRadius: '50%' }}
    />
  );
};

export default Avatar;
