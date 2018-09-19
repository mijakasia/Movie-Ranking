import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorStatus: '',
    }
  }

  async componentDidMount() {
    const response = await fetch('/movies')
    if (response.status >= 400) {
      this.setState({errorStatus: 'Error fetching movies'});
    } else {
      response.json().then(data => {
        this.setState({movies: data})
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        {this.state.movies.length > 0 && this.state.movies.map(movie =>
          <div key={movie.id}>{movie.data.title}</div>
        )}
      </div>
    );
  }
}

export default App;
