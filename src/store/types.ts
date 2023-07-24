export type GetMoviesPayload = {
  page: number;
};

export type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MoviesApiResponseType = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
