import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
import React from "react";
export default function Nav(){
    
    return (
        <nav>
            <div className={style.mainContainer} >
                <Link to="/home">Home</Link>
                <Link to="/activities">Form</Link>
            </div>
            
        </nav>
    )
}