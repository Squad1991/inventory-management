import React from 'react';
import EmptyCard from '~src/components/common/primitive/EmptyCard';
import MovieList from '~src/components/movie-list/MovieList';
import { Movie } from '~src/routes/home/types';

interface SimilarMoviesProps {
  movies: Movie[];
}

const SimilarMovies: React.FC<SimilarMoviesProps> = props => {
  const { movies } = props;
  if (movies.length === 0) return <EmptyCard message="No similar movies found " />;
  return <MovieList movies={movies} />;
};

export default SimilarMovies;
