export default interface IMovies {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  params?: any;
  tagline?: string;
}
