import React, { Component } from 'react';

import '../../styles/App.css';
import fetchMovies from './apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorStatus: '',
    }
  }

  async componentDidMount() {
    try {
      const data = await fetchMovies()
      this.setState({movies: data})
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        {this.state.movies.map(movie =>
          <div key={movie.id}>{movie.data.title}</div>
        )}
      </div>
    );
  }
}

export default App;
