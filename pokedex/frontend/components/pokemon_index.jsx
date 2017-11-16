import React from 'react';
import {Route} from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
    <section className="pokedex">
      <ul>
        { allPokemon }
        < Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}  />
      </ul>
    </section>
    );
  }
}

export default PokemonIndex;
