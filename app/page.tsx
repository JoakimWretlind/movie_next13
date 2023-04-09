import IMovies from "./components/interfaces/IMovies";
import { MovieCard } from "./components/movieCard";
import "./style.scss";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <div className="pageContainer">
        <h1 className="appHeader">watch the movie</h1>
        <div className="movie-grid">
          {res.results.map((movie: IMovies) => {
            const { id, title, poster_path, release_date, genre_ids, tagline } =
              movie;
            return (
              <MovieCard
                key={id}
                title={title}
                id={id}
                poster_path={poster_path}
                release_date={release_date}
                genre_ids={genre_ids}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
