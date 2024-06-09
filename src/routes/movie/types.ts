import { PaginatedResponse } from '~src/routes/home/types';

interface MovieCollection {
  id: string;
  name: string;
  poster_path: ImgURL;
  backdrop_path: ImgURL;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

type OriginCountry = string;
type ImgURL = string;

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface MovieDatails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MovieCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: OriginCountry[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: ImgURL;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export type MovieReviewReponse = PaginatedResponse<MovieReview>;
