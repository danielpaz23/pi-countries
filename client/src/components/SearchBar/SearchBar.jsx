import { useState } from "react";
import React from "react";

export default function SearchBar(props) {
    const [countries, setCountries] = useState("");
// conectar el back con el front
    const handleSearch = (event) => {
        let { value } = event.target;
        setCountries(value);
    };
    const handleButtonClick = async () => {
        try {
            const results = await props.onSearch(countries);
            props.setCountries(results);
        } catch (error) {
            return ({ error: error.message })
        }
    };
    return (
        <div>
            <input type="search" onChange={handleSearch} placeholder="Search for a Country..." />
            <button onClick={()=> props.onSearch(countries)}>Search</button>
            {/* <button onClick={() => props.onSearch(vgs)}>Search</button> */}
        </div>
    );
}
