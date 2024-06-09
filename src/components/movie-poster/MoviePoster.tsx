import { css } from '@compiled/react';
import React from 'react';

interface MoviePosterProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  imageUrl: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ title, imageUrl }) => {
  return (
    <img
      css={css({ flex: 1, objectFit: 'contain', background: '#161515' })}
      width={'100%'}
      height={'100%'}
      src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
      alt={title}
    />
  );
};

export default MoviePoster;
