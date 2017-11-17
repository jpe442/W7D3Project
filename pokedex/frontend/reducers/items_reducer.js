import React from 'react';
import { RECEIVE_POKE } from '../actions/pokemon_actions';


const itemsReducer = function (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POKE:
      return action.poke.items;
    default:
      return state;
  }
};

export default itemsReducer;
