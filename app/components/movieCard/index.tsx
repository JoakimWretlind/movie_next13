import Link from "next/link";
import Image from "next/image";
import IMovies from "../interfaces/IMovies";
import "./style.scss";

export const MovieCard = ({
  id,
  title,
  poster_path,
  release_date,
}: IMovies) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <Link href={`/${id}`} className="movieCard">
      <div className="infoContainer">
        <h1 className="title">{title}</h1>
        <p>{release_date}</p>
      </div>
      <div className="imgContainer">
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </div>
    </Link>
  );
};
