import React, { useState, useEffect } from 'react';
import { Database } from '../../data/database.json'
import axios from 'axios';

function PlacesList() {

    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('/data.json')
            .then((res) => {
                if(!res) {
                    throw new Error('Falhou!');
                }
                return res.json();
            })
            .then((data) => {
                setPlaces(data.places);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erro ->', error);
                setError(error.message)
            });

    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // const [addresses, setAddresses] = useState([]);

    // useEffect(() => {
    //     async function fetchAddresses() {
    //         const result = await axios.get('http://localhost:3000/places')
    //         setAddresses(result.data);
    //     }
    //     fetchAddresses();
    // }, []);

    return (

            <div>
                <h2>Lista de Lugares</h2>
                <ul>
                    {places.map(place => (
                        <li key = {place.id}>
                            {`   |${place.name}-->|${place.address}   |${place.category}`}
                            {place.name} -{place.address} - 
                        </li>
                    ))}
                </ul>
            </div>

    )

}

export default PlacesList