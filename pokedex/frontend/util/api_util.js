const APIUtil = {
  fetchAllPokemon: function() {
    return $.ajax({
      url: '/api/pokemon',
      method: 'GET'
    });
  },

  fetchPoke: function(pokeId) {
    return $.ajax({
      url: '/api/pokemon/' + pokeId,
      method: 'GET'
    });
  }
};

export default APIUtil;
