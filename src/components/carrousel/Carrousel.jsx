import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'; // Importa tus estilos generales aquí
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

export const Carrousel = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then(async (response) => {
        const pokemonList = response.data.results;

        const pokemonDataWithImages = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonDetails.data.sprites.other.dream_world.front_default,
            };
          })
        );

        setPokemonData(pokemonDataWithImages);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la PokeAPI:', error);
      });
  }, []);

  return (
    <div className="carrousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {pokemonData.map((pokemon, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide">
              <div className="pokemon-info">
                <img className='CarrouselImage' src={pokemon.image} alt={pokemon.name} />
                <p className="pokemon-name">{pokemon.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
