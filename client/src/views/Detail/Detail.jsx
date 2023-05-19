import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";


export default function Detail() {

    const { idPais } = useParams();
    const [countries, setCountries] = useState({
        id: '',
        name: '',
        flags: '',
        continents: '',
        capital: '',
        area: '',
        population: '',

    })
    // const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/countries/${idPais}`)
            .then((response) => response.json())
            .then((country) => {
                if (country.id) {
                    setCountries({
                        id:country.id,
                        name: country.name,
                        flags: country.flags,
                        continents: country.continents,
                        capital: country.capital,
                        area: country.area,
                        population: country.population
                    });
                } else {
                    alert("No hay Pais con ese ID");
                }
            })
            .catch((err) => {
                alert("ERROR "+ err.message);
            });
    }, [idPais]);
    return (
        <div>
            <div >
                <div >
                    {countries.id && (<p>
                        <b >ID: </b>
                        {countries.id}
                    </p>)}
                    {countries.name && (<p>
                        <b >Name: </b>
                        {countries.name}
                    </p>)}
                    
                    {countries.continents && (<p>
                        <b >Continents: </b>
                        {countries.continents}
                    </p>)}
                    {countries.capital && (<p>
                        <b >Capital: </b>
                        {countries.capital}
                    </p>)}
                    {countries.area && (<p>
                        <b >Area: </b>
                        {countries.area}
                    </p>)}
                    {countries.population && (<p>
                        <b >Population: </b>
                        {countries.population}
                        
                    </p>)}
                   
                </div>
                <img src={countries.flags} />
            </div>
            {/* <button onClick={() => navigate('/home')}>Back to Home</button> */}
        </div>
    );
    
}