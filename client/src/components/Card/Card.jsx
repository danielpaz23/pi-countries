import style from "./Card.module.css"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountry } from "../../redux/actions";

export default function Card(props) {
   
    return (
        <div className={style.divCards} >
                <Link
                    to={`/countries/${props.id}`}
                    style={{cursor:"pointer", textDecoration: "none", color: "black" }}
                >
                    <h2 className={style.cardh2}>{props.name}</h2>
                </Link>
            <div className={style.card}>
                <p>Nombre: {props.name}</p>
                <p>ID: {props.id}</p>
                <p>Continente: {props.continents}</p>

                <img className={style.cardimg} src={props.flags} alt="Bandera del país"></img>
            </div>
        </div>
    )
}