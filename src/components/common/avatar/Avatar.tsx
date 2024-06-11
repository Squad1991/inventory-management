import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import MoviePoster from '~src/components/movie-poster/MoviePoster';

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  size?: number;
}

/**
 * Renders the avatar component. This is specific to the application.
 * Renders fallback icon if image is not available.
 */

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 30, ...rest }) => {
  return (
    <MoviePoster
      width={size}
      height={size}
      src={imageUrl}
      fallback={<FaUserCircle size={size} />}
      style={{ width: size, height: size, borderRadius: '50%' }}
      {...rest}
    />
  );
};

export default Avatar;
