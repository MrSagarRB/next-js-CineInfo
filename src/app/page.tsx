import MovieType from "../app/interfaces/Types";
import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f1005566015b35ce530ea53658440821`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <h1>The CineInfo - By Sagar using Next JS 13.2</h1>
      <div className="grid gap-16 grid-cols-fluid ">
        {res?.results?.map((movie: MovieType) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
}
