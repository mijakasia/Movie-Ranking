import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('/movies')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
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
