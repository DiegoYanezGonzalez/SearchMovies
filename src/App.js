import React , {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Title} from  './components/Title';
import {SearchForm} from './components/SearchForm';
import { MovieList } from './components/MovieList';
import { Detail } from './pages/Detail';

class App extends Component {
  state = {usedSearch:false , results:[] }

_handleResults = (results) => {
  this.setState({ results , usedSearch:true })
}

_renderResults () {
  return this.state.results.length === 0
    ? <p> Sorry ! Results not found </p>
    :<MovieList movies ={this.state.results}/>
   
}

  render() {
    //direccion actual de la pagna
    const url = new URL(document.location)
    //nos indica si la url tiene el query para meter la id
    const hasId = url.searchParams.has('id')

    if (hasId){
      return <Detail id={url.searchParams.get('id')} />
    }


    return (
      <div className="App">
        <Title>Search Movie</Title>
         <div className="SearchForm-wrapper">
         <SearchForm onResults={this._handleResults}/>
         </div>
         {this.state.usedSearch
         ? this._renderResults()
         :<small>Use the form to search a movie</small>
        }
      </div>
    );
  }
}
 

export default App;
