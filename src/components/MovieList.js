import React from "react";
import '../App.css'

const MovieList = ({ movies, favouriteComponent, handleFavouriteClick }) => {

const FavouriteComponent = favouriteComponent;

  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div key={movie.imdbID} className="image-container container-sm d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="poster" />
            <div onClick={()=>{handleFavouriteClick(movie)}} className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
