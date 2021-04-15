import React , {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Title} from  './components/Title';
import {SearchForm} from './components/SearchForm';
import {Movie} from './components/Movie'

class App extends Component {
  state = {results:[]}

_handleResults = (results) =>{
  this.setState({results})
}

_renderResults() {
  const{results} = this.state
  return results.map(movie=>{
    return (
    <Movie
     key={movie.imdbID}
     title={movie.Title}
     year={movie.Year}
     poster={movie.Poster}
     />
    )
  })
}

  render() {
    return (
      <div className="App">
        <Title>Search Movie</Title>
         <div className="SearchForm-wrapper">
         <SearchForm onResults={this._handleResults}/>
         </div>
         {this.state.results.length === 0
         ? <p>Sin Resultados</p>
         :this._renderResults() 
        }
      </div>
    );
  }
}
 

export default App;
