// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import './Data';
import pokemons from './Data';
import Pokas from './Pokemon';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      filter: 0,
    }

    this.setFilterValue = this.setFilterValue.bind(this);
  }

  setFilterValue(){
    // this.state = { filter: event.target.value } => ta errado
    this.setState({ filter: this.state.filter + 1 });
    if (this.state.filter > 7) {
     this.setState({ filter: 0 });
    }
    this.nextPokemon(this.state.filter);
  }



  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div className="pokemons">
          <button onClick={this.setFilterValue}>Próximo Pokemon</button>
          <Pokas Key={pokemons[this.state.filter]} />
        </div>
      </div>
    );
  }
}

export default App;