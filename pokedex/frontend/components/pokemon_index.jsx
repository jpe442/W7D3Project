import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log(this.props.pokemon);
    return (
    <ul>
      {this.props.pokemon.map(poke => (<li>poke.name</li>))}
    </ul>
    );
  }
}

export default PokemonIndex;
