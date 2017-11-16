import React from 'react';

class PokemonIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map(poke => (
      <li>{poke.name}</li>
    ));
    return (
    <ul>
      { allPokemon }
    </ul>
    );
  }
}

export default PokemonIndex;
