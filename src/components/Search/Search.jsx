import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar } from '../Navbar/Navbar';
import axios from 'axios';
import { Carrousel } from '../carrousel/Carrousel';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [foundPokemon, setFoundPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showCarrousel, setShowCarrousel] = useState(true); 

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
            const pokemon = response.data;
            setFoundPokemon(pokemon);
            setError(false);
            setShowCarrousel(false); // Oculta el carrusel cuando se realiza una búsqueda
        } catch (error) {
            console.error('Error fetching data:', error);
            setFoundPokemon(null);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            const timer = setTimeout(() => {
                handleSearch();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchTerm]);

    const handleClear = () => {
        setSearchTerm('');
        setFoundPokemon(null);
        setError(false);
        setShowCarrousel(true); // Muestra el carrusel cuando se borra la búsqueda
    };

    return (
        <div className="container-fluid Search">
            <Navbar />
            <div className="SearchContainer">

                <div className="InputContainer">
                    <input
                        placeholder="Search for a Pokémon..."
                        id="input"
                        className="input"
                        name="text"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-button" onClick={handleClear}>Clear</button>
                    )}
                </div>

                <div className="result-container">
                    {isLoading ? (
                        <div className="loading"><div className="loader"></div></div>
                    ) : foundPokemon ? (
                        <div className="pokemon-result">
                            <h3>{foundPokemon.name}</h3>
                            <img
                                src={foundPokemon.sprites.other.dream_world.front_default}
                                alt={foundPokemon.name}
                            />
                        </div>
                    ) : null
                }
                {error && <div className="no-result-message">No Pokémon found with that name.</div>}
                </div>

                {showCarrousel && <Carrousel />} {/* Renderiza el carrusel si showCarrousel es verdadero */}
            </div>

        </div>
    );
};
