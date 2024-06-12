import React from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import MovieList from '~src/components/movie-list/MovieList';
import { Movie } from '~src/routes/home/types';

interface SimilarMoviesProps {
  movies: Movie[];
  onClick: (movie: Movie) => void;
}

/**
 * Renders a list of similar movies.
 */

const SimilarMovies: React.FC<SimilarMoviesProps> = props => {
  const { movies, onClick } = props;
  if (movies.length === 0)
    return <EmptyCard testId="no-similar-movies" message="No similar movies found " />;
  return <MovieList onMovieClick={onClick} movies={movies} />;
};

export default React.memo(SimilarMovies);
