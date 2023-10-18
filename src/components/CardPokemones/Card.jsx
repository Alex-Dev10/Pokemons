import React from 'react'
import "./style.css";
export const Card = ({ pokemon }) => {


  return (
    <div className="PokemonCard">
        
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
   
    />
   
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p className="pokemon-info">Height: {pokemon.height} dm</p>
      <p className="pokemon-info">Weight: {pokemon.weight} hg</p>
      <p className="pokemon-info">
        Types: {pokemon.types.map((type) => type.type.name).join(', ')}
      </p>
    
  </div>
  )
}
