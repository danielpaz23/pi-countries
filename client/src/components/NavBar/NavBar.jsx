import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import React from "react";
// import { useState } from "react";
export default function Nav(props){
    return (
        <nav>
            <div className={style.mainContainer} >
                <Link to="/home">Home</Link>
                <Link to="/activities">Form</Link>
                <SearchBar onSearch={props.onSearch} />
            </div>
            
        </nav>
    )
}