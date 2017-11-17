import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const uiReducer = function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKE:
      const newState = merge({}, state);
      newState.pokeDisplay = action.poke.pokemon.id;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
