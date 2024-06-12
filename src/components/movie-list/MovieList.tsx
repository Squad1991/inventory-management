import { styled } from '@compiled/react';
import React from 'react';
import { ComponentPropsWithTestId } from '~src/components/common/utils/types';
import MovieCard from '~src/components/movie-card/MovieCard';
import { Movie } from '~src/routes/home/types';

interface MovieListProps extends ComponentPropsWithTestId {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieListWrapper = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '1rem',
});

/**
 * Render list of movies cards.
 */

const MovieList: React.FC<MovieListProps> = ({ movies, testId, onMovieClick }) => {
  return (
    <MovieListWrapper data-testid={testId}>
      {movies.map((movie, index) => (
        <MovieCard onClick={onMovieClick} testId={`movie-${movie.id}`} movie={movie} key={index} />
      ))}
    </MovieListWrapper>
  );
};

export default React.memo(MovieList);
