import { AppUrls } from '~src/components/common/utils/constants';
import { Movie, MovieReponse, PaginatedResponse } from '~src/routes/home/types';
import { MovieReviewReponse } from '~src/routes/movie/types';

const fetchConfig = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      '__YOUR-API-TOKEN__', // https://www.themoviedb.org/settings/api
  },
};

export const fetchData = async <T>(config: { url: string }): Promise<T> => {
  const response = await fetch(config.url, fetchConfig);
  if (!response.ok) throw new Response(response.statusText, { status: response.status });
  const result: T = await response.json();
  return result;
};

export const searchMovies = async ({ query }: { query: string }) => {
  return fetchData<PaginatedResponse<Movie>>({
    url: `${AppUrls.SEARCH}?query=${query}`,
  });
};

export const getPopularMovies = async () => {
  const data = fetchData<MovieReponse>({
    url: `${AppUrls.POPULAR_MOVIES}?language=en-US&page=1`,
  });
  return data;
};

export const getMovieDetails = async ({ id }: { id: string }) => {
  return fetchData<Movie>({
    url: `${AppUrls.MOVIE}/${id}`,
  });
};

export const getMovieReviews = async ({ id }: { id: string }) => {
  return fetchData<MovieReviewReponse>({
    url: `${AppUrls.MOVIE}/${id}/reviews`,
  });
};

export const getSimilarMovie = async ({ id }: { id: string }) => {
  return fetchData<MovieReponse>({
    url: `${AppUrls.MOVIE}/${id}/similar`,
  });
};
