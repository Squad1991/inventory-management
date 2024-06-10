import { LoaderFunctionArgs, defer } from 'react-router-dom';
import { fetchData } from '~src/components/common/utils/API';
import { MovieReponse } from '~src/routes/home/types';
import { MovieDatails, MovieReviewReponse } from '~src/routes/movie/types';

export interface MovieInfoLoaderData {
  movieInfo: Promise<MovieDatails>;
  reviews: Promise<MovieReviewReponse>;
  similarMovies: Promise<MovieReponse>;
}

const MovieInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  const movieInfo = fetchData<MovieDatails>({
    url: `https://api.themoviedb.org/3/movie/${params.id}`,
  });
  const reviews = fetchData<MovieReviewReponse>({
    url: `https://api.themoviedb.org/3/movie/${params.id}/reviews`,
  });
  const similarMovies = fetchData<MovieReponse>({
    url: `https://api.themoviedb.org/3/movie/${params.id}/similar`,
  });

  return defer({ movieInfo, reviews, similarMovies });
};

export default MovieInfoLoader;
