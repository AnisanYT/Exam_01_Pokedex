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
                    setData(json.data);
                    console.log(json.data);
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
        <div>
            <h5>Consumiendo datos de un API-Rest</h5>
            <p>En este ejemplo se muestra como consumir datos de un API-Rest</p>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    return(<tr key={item['name']}>
                        <td>{item['name']}</td>
                    </tr>);
                })}
                </tbody>
            </table>
        </div>
    );
}
export default GetPokemon;