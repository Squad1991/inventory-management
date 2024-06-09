import React, { useEffect, useState } from 'react';
import { fetchData } from '~src/components/common/utils/API';
import MovieList from '~src/components/movie-list/MovieList';
import { MovieReponse } from '~src/routes/home/types';

interface SimilarMoviesProps {
  movieId: number;
}

const SimilarMovies: React.FC<SimilarMoviesProps> = props => {
  const { movieId } = props;
  const [similarMovies, setSimilarMovies] = useState<MovieReponse['results']>([]);
  const fetchSimilarMovies = async () => {
    const { results = [] } = await fetchData<MovieReponse>({
      url: `https://api.themoviedb.org/3/movie/${movieId}/similar`,
    });
    setSimilarMovies(results.splice(0, 10));
  };
  useEffect(() => {
    fetchSimilarMovies();
  }, [movieId]);
  return <MovieList movies={similarMovies} />;
};

export default SimilarMovies;
