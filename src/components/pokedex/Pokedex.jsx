import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Card } from '../CardPokemones/Card';

export const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    const itemsPerPage = 10;
    const offset = (currentPage - 1) * itemsPerPage;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsPerPage}`)
      .then(async (response) => {
        const pokemonData = response.data.results;
        const fullPokemonData = await Promise.all(
          pokemonData.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        setPokemonList(fullPokemonData);
        setLoading(false);
        setTotalPages(Math.ceil(response.data.count / itemsPerPage));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Pokemon">

      
      {loading ? (
        <div >

<div className="loader"></div>


        </div>
      ) : (
        < >
          {pokemonList.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
            
          ))}
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Siguiente
            </button>
          </div>
        </>
      )}


    </div>
  );
};
