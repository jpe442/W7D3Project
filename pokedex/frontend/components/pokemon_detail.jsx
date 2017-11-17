import React from 'react';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("MOUNTING COMPONENT");
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.poke && this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      console.log("UPDATING POKE");
      this.props.requestPoke(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (!this.props.poke) {
      return(<h1>Loading...</h1>);
    }
    const pokemon = this.props.poke;
    // const items = this.props.poke.items;
    return(
      <div>
        <h1>{pokemon.name}</h1>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves}</li>
          <li><img src={pokemon.image_url}></img></li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
