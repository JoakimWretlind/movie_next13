import "../components/interfaces/IMovies";
import IMovies from "../components/interfaces/IMovies";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie: IMovies) => ({
    // @ts-ignore
    movie: toString(movie.id),
  }));
}

export default async function DetailMovie({ params }: IMovies) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );

  const res = await data.json();

  return (
    <main>
      <div className="detailsWrapper">
        <div className="infoContainer">
          <h2 className="header">{res.title}</h2>
          <h2 className="info date">{res.release_date}</h2>
          <div className="genresWrapper">
            {res.genres.map((item: any, idx: number) => (
              <p className="info p-tag" key={idx}>
                {item.name}
              </p>
            ))}
          </div>
          <p className="info p-tag">
            <strong>Runtime:</strong> {res.runtime} minutes
          </p>
          <h2 className="info">Rating: {res.vote_average.toFixed(1)}/10</h2>
        </div>
        <Image
          className="detailImg"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          alt={res.title}
          priority
        />
        <p className="overview">{res.overview}</p>
        <Link className="back" href="/">
          back
        </Link>
      </div>
    </main>
  );
}
