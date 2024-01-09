import React from 'react';

class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHealth: props.currentHealth,
      maxHealth: props.maxHealth,
      abilities: props.abilities,
      imgUrl: props.imgUrl,
    };
  }

  render() {
    return (
      <div>
        <h1>Monster</h1>
        <p>Current Health: {this.state.currentHealth}</p>
        <p>Max Health: {this.state.maxHealth}</p>
        <p>Abilities: {this.state.abilities.join(', ')}</p>
        <img src={imgUrl} alt="monster" />
      </div>
    );
  }
}

export default Monster;
