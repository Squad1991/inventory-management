import { styled } from '@compiled/react';
import React from 'react';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';
import MovieCard from '~src/components/movie-card/MovieCard';
import { Movie } from '~src/routes/home/types';

interface MovieListProps extends ComponentPropsWithTestId {
  movies: Movie[];
}

const MovieListWrapper = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '1rem',
});

const MovieList: React.FC<MovieListProps> = ({ movies, testId }) => {
  return (
    <MovieListWrapper data-testid={testId}>
      {movies.map((movie, index) => (
        <MovieCard testId={`movie-${movie.id}`} movie={movie} key={index} />
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
