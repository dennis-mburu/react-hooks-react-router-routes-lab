import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <>
    {movies.map((movie) =>{ return(
      <div key={movie.title}>  
        <h2>
          Name: {movie.title}
        </h2>
        <h3>
          Time: {movie.time}
        </h3>
        <h4>
          Genres:
        </h4>
        <ul>{movie.genres.map((genre, index)=> <li key={index}>{genre}</li>)}</ul>
      </div>  
        )
    })}
    </>
  </div>;
}

export default Movies;
