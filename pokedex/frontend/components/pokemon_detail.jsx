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
    if (this.props.poke) {
      return(<h1>{this.props.poke.name}</h1>);
    } else {
      return(<h1>Loading...</h1>);
    }
  }
}

export default PokemonDetail;
