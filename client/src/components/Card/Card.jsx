import style from "./Card.module.css"
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {

    return (
        <div className={style.divCards}>
            
                <Link
                    to={`/countries/${props.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <h2>{props.name}</h2>
                </Link>
            <div className={style.card}>
                <p>Name: {props.name}</p>
                <p>ID: {props.id}</p>
                <p>image: {props.flags}</p>
                <p>Continents: {props.continents}</p>
                
            </div>
        </div>
    )
}