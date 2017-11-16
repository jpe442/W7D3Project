import values from 'lodash/values';

export const selectAllPokemon = state => values(state.entities.pokemon);

export const selectPoke = function (state, pokeId) {
  return state.entities.pokemon[pokeId];
};
