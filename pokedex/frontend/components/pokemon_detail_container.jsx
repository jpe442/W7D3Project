import React from 'react';
import { connect } from 'react-redux';
import { selectPoke } from '../reducers/selectors';
import { location, withRouter } from 'react-router-dom';
import { requestPoke } from '../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = function (state) {
  return {
    poke: state.entities.pokemon[state.ui.pokeDisplay]
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    requestPoke: (pokeId) => dispatch(requestPoke(pokeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
