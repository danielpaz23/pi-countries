import { useState } from "react";
import React from "react";
import {searchCountryName} from "../../redux/actions.js"
import { useDispatch } from "react-redux";
export default function SearchBar({country, setCountry}) {
    const dispatch = useDispatch();
   



// conectar el back con el front
    const handleSearch = (event) => {
        event.preventDefault();
        setCountry(event.target.value)
        
    };
    const handleButtonClick = (event) => {
        event.preventDefault();
        dispatch(searchCountryName(country));
        setCountry("");

        // try {
        //     await props.onSearch(countries);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // try {
        //     const results = await props.onSearch(countries);
        //     props.setCountries(results);
        // } catch (error) {
        //     return ({ error: error.message })
        // }
    };
    return (
        <div>
            <input type="search" onChange={(event) => handleSearch(event)} placeholder="Search for a Country..." />
            <button onClick={(event) => handleButtonClick(event)}>Search</button>
            
            {/* <button onClick={() => props.onSearch(vgs)}>Search</button> */}
        </div>
    );
}
