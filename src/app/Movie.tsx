import Image from "next/image";
import Link from "next/link";
import React from "react";
import MovieType from "../app/interfaces/Types";

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const { title, overview, release_date, poster_path, id } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <div>
      <h1>Name: {title}</h1>
      {/* <h1>Overview: {overview}</h1> */}
      <h1>Release Date: {release_date} </h1>
      <Link href={`/${id}`}>
        <Image src={imgUrl} height={800} width={800} alt={title} />
      </Link>
    </div>
  );
};

export default Movie;
