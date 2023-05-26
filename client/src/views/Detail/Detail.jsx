import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import style from "./Detail.module.css";
import { getCountry } from "../../redux/actions.js";

export default function Detail() {
    const { idPais } = useParams();
    const dispatch = useDispatch();

    const country = useSelector((state) => state.country);

    useEffect(() => {
        dispatch(getCountry(idPais));
    }, [dispatch, idPais]);

    return (
        <div>
            <div className={style.countrydetail}>
                <div className={style.countryinfo}>
                    {country.id && (
                        <p className={style.countryid}>
                            <b>ID: </b>
                            {country.id}
                        </p>
                    )}
                    {country.name && (
                        <p className={style.countryname}>
                            <b>Nombre: </b>
                            {country.name}
                        </p>
                    )}
                    {country.continents && (
                        <p>
                            <b>Continente: </b>
                            {country.continents}
                        </p>
                    )}
                    {country.capital && (
                        <p>
                            <b>Capital: </b>
                            {country.capital}
                        </p>
                    )}
                    {country.area && (
                        <p>
                            <b>Area: </b>
                            {country.area}
                        </p>
                    )}
                    {country.population && (
                        <p>
                            <b>Populacion: </b>
                            {country.population}
                        </p>
                    )}
                </div>
                <img className={style.countryflag} src={country.flags} alt="Country Flag" />
                {country.Activities && country.Activities.length > 0 && (
                    <div className={style.activities}>
                        <h3>Actividades:</h3>
                        <ul>
                            {country.Activities.map((activity) => (
                                <li key={activity.id}>
                                    <p>
                                        <b>Nombre: </b>
                                        {activity.name}
                                    </p>
                                    <p>
                                        <b>Dificultad: </b>
                                        {activity.difficulty}
                                    </p>
                                    <p>
                                        <b>Temporada: </b>
                                        {activity.season}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}



// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import React from "react";
// import style from "./Detail.module.css";
// import { getCountry } from "../../redux/actions.js";
// import axios from "axios";

// export default function Detail() {
//     const { idPais } = useParams();
//     const dispatch = useDispatch();

//     const country = useSelector((state) => state.country);

//     useEffect(() => {
//         dispatch(getCountry(idPais));
//     }, [dispatch, idPais]);

//     return (
//         <div>
//             <div className={style.countrydetail}>
//                 <div className={style.countryinfo}>
//                     {country.id && (
//                         <p className={style.countryid}>
//                             <b>ID: </b>
//                             {country.id}
//                         </p>
//                     )}
//                     {country.name && (
//                         <p className={style.countryname}>
//                             <b>Nombre: </b>
//                             {country.name}
//                         </p>
//                     )}
//                     {country.continents && (
//                         <p>
//                             <b>Continente: </b>
//                             {country.continents}
//                         </p>
//                     )}
//                     {country.capital && (
//                         <p>
//                             <b>Capital: </b>
//                             {country.capital}
//                         </p>
//                     )}
//                     {country.area && (
//                         <p>
//                             <b>Area: </b>
//                             {country.area}
//                         </p>
//                     )}
//                     {country.population && (
//                         <p>
//                             <b>Populacion: </b>
//                             {country.population}
//                         </p>
//                     )}
//                 </div>
//                 <img className={style.countryflag} src={country.flags} alt="Country Flag" />
//                 {country.Activities && country.Activities.length > 0 && (
//                     <div className={style.activities}>
//                         <h3>Actividades:</h3>
//                         <ul>
//                             {country.Activities.map((activity) => (
//                                 <li key={activity.id}>
//                                     <p>
//                                         <b>Nombre: </b>
//                                         {activity.name}
//                                     </p>
//                                     <p>
//                                         <b>Dificultad: </b>
//                                         {activity.difficulty}
//                                     </p>
//                                     <p>
//                                         <b>Temporada: </b>
//                                         {activity.season}
//                                     </p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             {/* <button onClick={() => navigate('/home')}>Back to Home</button> */}
//         </div>
//     );
// }
