import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log("Pokemon: Component Has Mounted.")
  }
  
  render() {
    console.log("Pokemon: Component Is Rendering.");
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;
