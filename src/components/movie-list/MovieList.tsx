import { styled } from '@compiled/react';
import React from 'react';
import MovieCard from '~src/components/movie-card/MovieCard';
import { Movie } from '~src/routes/home/types';

interface MovieListProps {
  movies: Movie[];
}

const MovieListWrapper = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '1rem',
});

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
