import { defer } from 'react-router-dom';
import { getPopularMovies } from '~src/components/common/utils/api';

const HomePageDataLoader = async () => {
  const data = getPopularMovies();
  return defer({ data });
};

export default HomePageDataLoader;
