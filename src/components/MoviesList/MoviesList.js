import React from 'react';
import Form from '../Form/Form';
import MovieItem from '../MovieItem/MovieItem';
import moviesList from './data';
import './MoviesList.css';

class MoviesList extends React.Component {
  state = {
    movies: moviesList
  }

  /*
    Hasta este punto la comunicación era unidireccional => Padre pasaba a los hijos información a través de las props.
    Lifting state up: La comunicación se vuelve bidireccional. El padre pasa una prop al hijo (una función) y la llamada a esa función modifica el state del padre
  */
  removeMovie = (id) => {
    this.setState({ movies: this.state.movies.filter(movie => movie.id !== id) });
  }

  sortMoviesByYear = () => {
    const arrayCopy = [ ...this.state.movies ];
    this.setState({ movies: arrayCopy.sort((movie1, movie2) => movie1.year - movie2.year )});
  }

  addMovie = (movie) => {
    const arrayCopy = [ ...this.state.movies ];
    arrayCopy.push(movie);

    this.setState({ movies: arrayCopy });
  }

  displayMovies = () => {
    // const { movies } = this.state;
    return this.state.movies.map((movie) => {
      // <MovieItem title={title} year={year} runtime={runtime} key={movie.id}/>
      return (
        // Spread operator pasará al componente MovieItem una prop por cada key tenga el objeto movie
        <MovieItem {...movie} removeItem={() => this.removeMovie(movie.id)} key={movie.id} />
      )
    })
  }

  render() {
    return (
      <div>
        <Form addMovie={(movie) => this.addMovie(movie)} />
        <button onClick={() => this.sortMoviesByYear()}>Order by year</button>
        <button onClick={() => this.addMovie()}>Add movie</button>
        <div className="movies-container">
          {
            this.displayMovies()
          }
        </div>
      </div>
    )
  }
}

export default MoviesList;