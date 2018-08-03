import React from 'react';


const Movies = (props) => {
  const movieList = props.movies.map((movie, i ) => {
    console.log(movie, ' movie id')
    return (
      <li key={movie._id}>
        <h1>{movie.title}</h1><br/>
        <small>{movie.description}</small><br/>
        <button onClick={props.deleteMovie.bind(null, movie._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, movie._id)}>Edit</button>
    </li>)
  })

  return (
    <ul>
      {movieList}
    </ul>
    )

};


export default Movies;