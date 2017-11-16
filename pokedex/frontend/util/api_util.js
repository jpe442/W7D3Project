const APIUtil = {
  fetchAllPokemon: function() {
    return $.ajax({
      url: '/api/pokemon',
      method: 'GET'
    });
  }
};

export default APIUtil;
