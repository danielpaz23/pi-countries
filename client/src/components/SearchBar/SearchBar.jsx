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
            await props.onSearch(countries);
          } catch (error) {
            console.error(error);
          }
        // try {
        //     const results = await props.onSearch(countries);
        //     props.setCountries(results);
        // } catch (error) {
        //     return ({ error: error.message })
        // }
    };
    return (
        <div>
            <input type="search" onChange={handleSearch} placeholder="Search for a Country..." />
            <button onClick={handleButtonClick}>Search</button>
            {/* <button onClick={() => props.onSearch(vgs)}>Search</button> */}
        </div>
    );
}
