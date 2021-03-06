import React, { Component } from 'react';

import fetchMovies from './apiCalls.js';

class App extends Component {
  constructor(props) {
    super(props);
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
      <div className="app">
        <h1>Movies</h1>
        {this.state.movies.map(movie =>
          <div key={movie.id}>{movie.data.title}</div>
        )}
      </div>
    );
  }
}

export default App;
