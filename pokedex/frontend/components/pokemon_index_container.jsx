import React from 'react';
import { selectAllPokemon } from '../reducers/selectors';
import { requestAllPokemon } from '../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

const mapStateToProps = function (state) {
  console.log("selector result:");
  console.log(selectAllPokemon(state));
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    requestAllPokemon: requestAllPokemon(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
