import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import { Root } from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
});
