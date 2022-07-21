import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    <>
    {actors.map(actors => {return(
      <div key={actors.name}>
        <h2>Name: {actors.name}</h2>
        <ul>
          {actors.movies.map((movie,index) => <li key={index}>{movie}</li>
          )}
        </ul>
      </div>
    )})}
    </>
  </div>;
}

export default Actors;
