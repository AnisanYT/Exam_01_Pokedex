import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPokemon = () => {
    const [data, setData] = useState([]);
    let result: any[];
    result = [];

    const Obtener = async () => {
        try {
            axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
            .then(response => {
                const json = response.data;
                setData(json.results); 
                console.log(json.results);
            });
        
        } catch (error) {
            console.error(error);
        }
    };

    const convertir = () => {
        data.forEach((item, index) => {
            result.push(item);
        });
    }

    useEffect(() => {
        Obtener();

    }, []);

    useEffect(() => {
        convertir();
    }, [data]);

    return (
        <div className='container-poke'>
            {data.map((item, index) => {
                return(
                    <div className="card">
                        <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item['name']}.png`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{item['name']}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default GetPokemon;