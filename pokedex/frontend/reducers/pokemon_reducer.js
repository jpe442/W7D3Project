import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKE:
      const newState = merge({}, state);
      newState[action.poke.id] = action.poke;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
