import React from 'react';
import Inline from '~src/components/common/primitive/Inline';
import { Genre } from '~src/routes/movie/types';

interface MovieGenresProps {
  genres: Genre[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  return (
    <Inline>
      {genres
        .map(genre => {
          return genre.name;
        })
        .join('/')}
    </Inline>
  );
};

export default MovieGenres;
