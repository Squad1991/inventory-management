import { LoaderFunctionArgs, defer } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieReviews,
  getSimilarMovie,
} from '~src/components/common/utils/api';
import { MovieReponse } from '~src/routes/home/types';
import { MovieDatails, MovieReviewReponse } from '~src/routes/movie/types';

export interface MovieInfoLoaderData {
  movieInfo: Promise<MovieDatails>;
  reviews: Promise<MovieReviewReponse>;
  similarMovies: Promise<MovieReponse>;
}

const MovieInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id === undefined) {
    throw new Error('Movie ID is required');
  }
  const movieInfo = getMovieDetails({ id: params.id });
  const reviews = getMovieReviews({ id: params.id });
  const similarMovies = getSimilarMovie({ id: params.id });

  return defer({ movieInfo, reviews, similarMovies });
};

export default MovieInfoLoader;
