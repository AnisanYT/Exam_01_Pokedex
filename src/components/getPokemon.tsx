import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { idText } from 'typescript';

interface Pokemon {
    name: string;
    abilities: string;
    base_experience: number;
}

interface GetPokemonProps {
    selectedGeneration: number | null;
}

interface PokemonData {
  name: string;
  abilities: { ability: { name: string } }[];
  base_experience: number;
  weight: number;
  height: number;
  id: number;
  types: { type: {name: string} } [];
  moves: { move : {name: string } }[];
  sprites: { front_default: string };
  // Agrega más propiedades según la estructura de datos real del Pokémon
}

const GetPokemon: React.FC<GetPokemonProps> = ({ selectedGeneration }) => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
    const [pokemonDetail, setDetailPoke] = useState<PokemonData | null>(null);
    

    useEffect(() => {
        const fetchData = async () => {
            if (selectedGeneration !== null) {
                let offset = 0;
                let limit = 151;

                switch (selectedGeneration) {
                    case 1:
                        offset = 0;
                        limit = 151;
                        break;
                    case 2:
                        offset = 151;
                        limit = 100;
                        break;
                    case 3:
                        offset = 251;
                        limit = 135;
                        break;
                    case 4:
                        offset = 386;
                        limit = 107;
                        break;
                    case 5:
                        offset = 493;
                        limit = 156;
                        break;
                    default:
                        break;
                }

                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
                    setPokemonData(response.data.results);
                } catch (error) {
                    console.error('Error fetching Pokemon:', error);
                }
            }
        };

        fetchData();
    }, [selectedGeneration]);

    const handlePokemonClick = async (pokemon: Pokemon) => {
      setSelectedPokemon(pokemon);
      try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setDetailPoke(response.data)
        // if (pokemonDetail){
        //   pokemonDetail.abilities.map((poke, index) => (
        //     console.log(poke.ability.name)
        //   ))
        // }
        
      }catch(error){
        console.log('Ah sucedido un error: ', error)
      }

  };
  return (
    <div className='container-poke'>
        {pokemonData.map((pokemon, index) => (
          <a onClick={() => handlePokemonClick(pokemon)}>
            <div key={pokemon.name} className="card">
                <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`} alt="Pokemon" />
                <div className="card-body">
                    <p className="card-text">{pokemon.name}</p>
                </div>
            </div>
          </a>
        ))}
        {selectedPokemon && (
            <div className="overlay">
                <div className="card overlay-card">
                    <h4>N°: {pokemonDetail?.id}</h4>
                    <h4>Name: {selectedPokemon.name}</h4>
                    <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${selectedPokemon.name}.png`} alt="Pokemon" />
                    <div className='heigth-width'>
                        <table>
                            <thead>
                                <td><strong>Height</strong></td>
                                <td><strong>Weight</strong></td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{pokemonDetail?.height}</td>
                                    <td>
                                        {pokemonDetail?.weight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>Types: </h4>
                    <div className='types_box'>
                        {pokemonDetail?.types.map((type, index) => (
                            <p className={type.type.name}><strong>{type.type.name}</strong></p>   
                        ))}
                    </div>
                    <h4>Moves</h4>
                    <div className='abilities-p'>
                    {pokemonDetail?.moves.slice(0, 4).map((poke, index) => (
                            <p>{poke.move.name}</p>
                        ))}
                    </div>
                  <button className='buttonClose' onClick={() => setSelectedPokemon(null)}>Close</button>
                </div>
            </div>
        )}
    </div>
);
};

export default GetPokemon;
