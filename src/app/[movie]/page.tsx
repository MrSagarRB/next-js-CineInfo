import React from "react";

interface paramsObj {
  params: any;
}

const MovieDetails = async ({ params }: paramsObj) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  );

  console.log(data);
  return <div>page</div>;
};

export default MovieDetails;
