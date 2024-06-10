import React from 'react';
import Image from '~src/components/common/image/Image';

type MoviePosterProps = React.ComponentProps<typeof Image>;

const MoviePoster: React.FC<MoviePosterProps> = ({ src, ...rest }) => {
  return (
    <Image
      width={'100%'}
      height={'100%'}
      src={`https://image.tmdb.org/t/p/original/${src}`}
      {...rest}
    />
  );
};

export default MoviePoster;
