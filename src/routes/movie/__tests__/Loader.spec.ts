import MovieInfoLoader from '~src/routes/movie/Loader';

describe('MovieLoader', () => {
  it('should load a movie', () => {
    const movieLoader = MovieInfoLoader({
      request: new Request('http://localhost:3000/movie/1'),
      params: { id: '1' },
    });
    expect(movieLoader).toBeDefined();
  });
  it('should throw error if id not available', () => {
    expect(() =>
      MovieInfoLoader({
        request: new Request('http://localhost:3000/movie/1'),
        params: {},
      }),
    ).rejects.toThrowWithMessage(Error, 'Movie ID is required');
  });
});
