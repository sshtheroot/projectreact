

import React from 'react'; 


class ListArticle extends React.Component {
    constructor() {
      super()
      this.state = { movies: [] }
    }
  
    cool() {
      var myRequest = new Request('https://crawler-micro.onrender.com/Amazon');
      let movies = [];
  
      fetch(myRequest)
        .then(response => response.json())
        .then(data => {
          this.setState({ movies: data })
        })
    }
  
    render() {
      return (
        <div>
          <h1>Movie List</h1>
          <ul>
            {this.state.movies.map(movie => {
              return <li key={`movie-${movie.title}`}>{movie.url}</li>
            })}
          </ul>
        </div>
      )
    }
  }

  export default ListArticle;