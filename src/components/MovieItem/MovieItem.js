import React from 'react';

function MovieItem({ id, title, year, runtime, director, genres, removeItem }) {
  // const { id, title, year, runtime, director, genres } = props;

  return (
    <div className="movie-item">
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Runtime: {runtime}</p>
      <p>Director: {director}</p>
      <ul>
        {
          genres && genres.map((genre) => {
            return (
              <li key={`${id}${genre}`}>{genre}</li>
            )
          })
        }
      </ul>
      <button onClick={removeItem}>Delete</button>
    </div>
  )
}

export default MovieItem;