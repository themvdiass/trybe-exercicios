// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import './Data';
import pokemons from './Data';
import Pokas from './Pokemon';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div className="pokemons">
          {pokemons.map((pokemon) => {
            return (
              <Pokas Key={pokemon} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;