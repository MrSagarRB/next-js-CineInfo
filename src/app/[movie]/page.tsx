import React from "react";

interface paramsObj {
  params: any;
}

const MovieDetails = async ({ params }: paramsObj) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=f1005566015b35ce530ea53658440821`
  );

  console.log(data);
  return <div>page</div>;
};

export default MovieDetails;
