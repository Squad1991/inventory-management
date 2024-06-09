import { fetchData } from '~src/components/common/utils/API';
import { MovieReponse } from '~src/routes/home/types';

const HomePageDataLoader = async () => {
  return fetchData<MovieReponse>({
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  });
};

export default HomePageDataLoader;