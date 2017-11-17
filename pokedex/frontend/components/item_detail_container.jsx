import React from 'react';
import { receivePoke } from '../actions/pokemon_actions';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = function (state, ownProps) {
  return {
    item: state.entities.items[ownProps.match.params.itemId]
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    receivePoke: dispatch(receivePoke())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
