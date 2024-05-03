import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import { Button } from '../Button/Button.js';


function PlaceForm() {

    const formFields = {
        name: 'Nome do lugar',
        address: 'Endereço',
        category: 'Categoria'
    }

    const [placeData, setPlaceData] = useState({
        name: '',
        address: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlaceData({
            ...placeData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = JSON.stringify(placeData);
        const filePath = path.join(__dirname, 'database.json');

        fs.writeFile(filePath, dataToSubmit, (err) => {
            if(err) throw err;
            console.log('Sucesso! Lugar salvo com sucesso!')
        });
    };
    
    return (
        <>
            <div className = 'registry-container'>
            <div className = 'form-container'>
                <form onSubmit = {handleSubmit} className = 'form'>
                    <label className = 'form-label'>
                        {formFields.name}
                        <br />
                        <input type = 'text' name = 'name' value = {placeData.name} onChange = {handleChange}/>
                    </label>
                    <br />
                    <label className = 'form-label'>
                        {formFields.address}
                        <br />
                        <input type = 'text' name = 'address' value = {placeData.address} onChange = {handleChange}/>
                    </label>
                    <br />
                    <label className = 'form-label'>
                        {formFields.category}
                        <br />
                        <input type = 'text' name = 'category' value = {placeData.category} onChange = {handleChange} />
                    </label>
                    <br />
                    <br />
                    <Button onClick = {handleSubmit} buttonStyle = 'btn--outlined' buttonSize = 'btn--large'>
                        Enviar
                    </Button> 
                </form>
            </div>
            </div>
        </>
    )
}

export default PlaceForm