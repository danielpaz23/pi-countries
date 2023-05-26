import { Link } from "react-router-dom"
import { useState } from "react";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import React from "react";
export default function Nav(props){
    const [country, setCountry] = useState("");
    console.log(country)
    
    return (
        <nav>
            <div className={style.mainContainer} >
                <Link to="/home">Home</Link>
                <Link to="/activities">Form</Link>
                <SearchBar country={country} setCountry={setCountry}/>
            </div>
            
        </nav>
    )
}