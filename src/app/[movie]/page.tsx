import Image from "next/image";
import React from "react";

interface paramsObj {
  params: any;
}

const MovieDetails = async ({ params }: paramsObj) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=f1005566015b35ce530ea53658440821`
  );
  const res = await data.json();
  console.log(res);

  const imgUrl = `https://image.tmdb.org/t/p/original/${res.poster_path}`;
  const imgPath = "https://image.tmdb.org/t/p/original/";

  interface prodCompType {
    id: number;
    logo_path: any;
    name: String;
    origin_country: String;
  }

  return (
    <div>
      <h1>Name:{res.title}</h1>
      <h1>Release Date {res.release_date}</h1>
      <h1>Revenue {res.revenue}</h1>
      <Image src={imgUrl} height={800} width={800} alt={res.title} />
      <div className="flex  space-x-4">
        {res.production_companies.map((item: prodCompType) => {
          return (
            <div key={item.id}>
              <div className="h-[100px] w-[100px]">
                {" "}
                <Image
                  src={imgPath + item.logo_path}
                  height={100}
                  width={100}
                  alt=""
                />{" "}
              </div>
              <div>{item.name} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetails;
