export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";
import APIUtil from '../util/api_util';

export const receiveAllPokemon = function(pokemon) {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePoke = function(poke) {
  return {
    type: RECEIVE_POKE,
    poke
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPoke = (pokeId) => (dispatch) => (
  APIUtil.fetchPoke(pokeId)
    .then(poke => dispatch(receivePoke(poke)))
);
