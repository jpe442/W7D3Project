import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon_index_container';

export const Root = function ({ store }) {
  return (
  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
  );
};
