import { render } from '@testing-library/react';
import MovieInfo from '~src/components/movie-info/MovieInfo';

describe('MovieInfo', () => {
  it('renders movie information correctly', () => {
    const { container } = render(
      <MovieInfo
        movie={{
          video: false,
          adult: false,
          belongs_to_collection: {
            id: '1',
            name: 'Dummy collection',
            poster_path: 'dummy.jpg',
            backdrop_path: 'dummy.jpg',
          },
          budget: 1000000,
          homepage: 'https://www.dummyurl.com',
          id: 1,
          imdb_id: 'tt123456',
          origin_country: ['US'],
          original_language: 'en',
          original_title: 'Dummy title',
          popularity: 100,
          production_companies: [],
          production_countries: {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
          revenue: 1000000,
          spoken_languages: [
            {
              english_name: 'English',
              iso_639_1: 'en',
              name: 'English',
            },
          ],
          status: 'Released',
          tagline: 'Dummy tagline',
          title: 'Dummy title',
          release_date: '2021-01-01',
          genres: [
            {
              id: 1,
              name: 'Action',
            },
            {
              id: 2,
              name: 'Adventure',
            },
          ],
          overview: 'Dummy overview',
          runtime: 120,
          vote_average: 7.5,
          vote_count: 100,
          backdrop_path: 'dummy.jpg',
          poster_path: 'dummy.jpg',
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
