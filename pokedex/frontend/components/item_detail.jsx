import React from 'react';

class ItemDetail extends React.Component {

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  render() {
    const item = this.props.item;
    if (!item) {
      return(<h1>Loading...</h1>);
    }
    return (
      <ul>
        <li>{item.name}</li>
        <li>Price:{item.price}</li>
        <li>Happiness:{item.happiness}</li>
        <li><img src={item.image_url}/></li>
      </ul>
    );
  }
}

export default ItemDetail;
