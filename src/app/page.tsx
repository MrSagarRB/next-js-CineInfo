import MovieType from "../app/interfaces/Types";
import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1>The Movies Flex</h1>
      <div className="grid gap-16 grid-cols-fluid ">
        {res.results.map((movie: MovieType) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
}
