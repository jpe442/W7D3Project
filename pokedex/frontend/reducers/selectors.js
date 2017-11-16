import values from 'lodash/values';

export const selectAllPokemon = function(state) {
  const pokemon = state.entities.pokemon;
  return values(pokemon);
};
