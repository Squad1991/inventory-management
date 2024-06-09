import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchData } from '~src/components/common/utils/API';
import { MovieDatails } from '~src/routes/movie/types';

const MovieInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  return fetchData<MovieDatails>({
    url: `https://api.themoviedb.org/3/movie/${params.id}`,
  });
};

export default MovieInfoLoader;
