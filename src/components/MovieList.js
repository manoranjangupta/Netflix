import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div>
      <div>
        <h1>
          {title}
          <div>
         
            {movies && movies.map((movie) => (
              <MovieCard key={movies.id} posterPath={movies.poster_path} />
            ))}

          </div>
        </h1>
      </div>
    </div>
  );
};

export default MovieList;
