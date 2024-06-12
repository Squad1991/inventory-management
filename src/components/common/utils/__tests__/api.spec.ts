import { vi } from 'vitest';
import {
  fetchData,
  getMovieDetails,
  getMovieReviews,
  getPopularMovies,
  getSimilarMovie,
  searchMovies,
} from '~src/components/common/utils/api';

describe('api', () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch').mockReturnValue(
      Promise.resolve(new Response('{"data": "some data"}')),
    );
  });
  it('should fetch data from the specified URL', async () => {
    const url = 'https://example.com/api/data';
    const data = await fetchData<{ data: string }>({ url });
    expect(data.data).toBe('some data');
  });
  it('should hanle error', async () => {
    vi.spyOn(window, 'fetch').mockReturnValue(
      Promise.resolve(
        new Response('{"data": "some data"}', {
          status: 400,
          statusText: 'Bad Request',
        }),
      ),
    );
    const url = 'https://example.com/api/data';
    await fetchData<{ data: string }>({ url }).catch(err => {
      expect(err).toBeDefined();
    });
  });
  it('should fetch similar movies', async () => {
    const data = await getSimilarMovie({ id: '1' });
    expect(data).toBeDefined();
  });
  it('should fetch movie reviews', async () => {
    const data = await getMovieReviews({ id: '1' });
    expect(data).toBeDefined();
  });
  it('should fetch movies', async () => {
    const data = await searchMovies({ query: '1' });
    expect(data).toBeDefined();
  });
  it('should fetch popular movies', async () => {
    const data = await getPopularMovies();
    expect(data).toBeDefined();
  });
  it('should fetch data for a given movie', async () => {
    const data = await getMovieDetails({
      id: '1',
    });
    expect(data).toBeDefined();
  });
});
