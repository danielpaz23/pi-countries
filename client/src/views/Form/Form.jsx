import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import axios from "axios";
import { addAct, getCountries } from "../../redux/actions.js";
const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        season: [],
        countries: [],
    });
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        season: "",
        countries: "",
    });

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const validate = (form) => {
        // validate name
        if (!form.name || typeof form.name !== "string") {
            setErrors({ ...errors, name: "" });
        } else {
            setErrors({ ...errors, name: "El Nombre no es correcto" });
        }
        if (form.name === "") setErrors({ ...errors, name: "Nombre vacio" });
        // validate difficulty
        if (
            !form.difficulty ||
            !["1", "2", "3", "4", "5"].includes(form.difficulty)
        ) {
            setErrors({ ...errors, difficulty: "" });
        } else {
            setErrors({ ...errors, difficulty: "Debe ser de 1 a 5" });
        }
        if (form.difficulty === "")
            setErrors({ ...errors, difficulty: "Dificultad vacia" });
        // validate Temporada
        if (
            !form.season ||
            !["Verano", "Otoño", "Invierno", "Primavera"].includes(form.season)
        ) {
            setErrors({ ...errors, season: "" });
        } else {
            setErrors({
                ...errors,
                season: "Deben ser Verano, Otoño, Invierno, Primavera",
            });
        }
        if (form.season === "")
            setErrors({ ...errors, season: "Temporada vacia" });
    };

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    };

    const countrySelectionHandler = (event) => {
        const selectedCountry = event.target.value;
        const isSelected = event.target.checked;

        if (isSelected) {
            setForm({
                ...form,
                countries: [...form.countries, selectedCountry],
            });
        } else {
            const updatedCountries = form.countries.filter(
                (country) => country !== selectedCountry
            );
            setForm({ ...form, countries: updatedCountries });
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(
            addAct(form.name, form.difficulty, form.season, form.countries)
        )
            .then(() => {
                alert("Activity added successfully");
            })
            .catch((err) => {
                alert("Error adding activity: " + err);
            });
    };

    const difficultySelectionHandler = (event) => {
        const difficultyValue = event.target.value;
        setForm({ ...form, difficulty: difficultyValue });
    };

    const seasonSelectionHandler = (event) => {
        const seasonValue = event.target.value;
        setForm({ ...form, season: seasonValue });
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={changeHandler}
                    name="name"
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Difficulty</label>
                <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            type="button"
                            onClick={difficultySelectionHandler}
                            value={value}
                            className={
                                form.difficulty === String(value)
                                    ? "selected"
                                    : ""
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
                {errors.difficulty && <span>{errors.difficulty}</span>}
            </div>
            <div>
                <label>Season:</label>
                <div>
                    {["Verano", "Otoño", "Invierno", "Primavera"].map(
                        (season) => (
                            <button
                                key={season}
                                type="button"
                                onClick={seasonSelectionHandler}
                                value={season}
                                className={
                                    form.season === season ? "selected" : ""
                                }
                            >
                                {season}
                            </button>
                        )
                    )}
                </div>
                {errors.season && <span>{errors.season}</span>}
            </div>

            <div>
                <label>Countries:</label>
                <ul className="country-list">
                    {countries.map((country) => (
                        <li key={country.id}>
                            <input
                                type="checkbox"
                                id={country.id}
                                value={country.id}
                                checked={form.countries.includes(country.id)}
                                onChange={countrySelectionHandler}
                            />
                            <label htmlFor={country.id}>{country.name}</label>
                        </li>
                    ))}
                </ul>
                {errors.countries && <span>{errors.countries}</span>}
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    );
};

export default Form;






// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { addAct } from "../../redux/actions.js"; // Importar la acción addAct
// const Form = () => {
//     // 
//     const dispatch = useDispatch(); // Obtener la función dispatch

//     const [form, setForm] = useState({
//         name: "",
//         difficulty: "",
//         season: [],
//         countries: [],
//     })
//     const [errors, setErrors] = useState({
//         name: "",
//         difficulty: "",
//         season: "",
//         countries: "",
//     })

//     const validate = (form) => {
//         // validate name
//         if (!form.name || typeof form.name !== 'string') {
//             setErrors({ ...errors, name: "" })
//         } else {
//             setErrors({ ...errors, name: "El Nombre no es correcto" })
//         }
//         if (form.name === "") setErrors({ ...errors, name: "Nombre vacio" })
//         // validate difficulty
//         if (!form.difficulty ||
//             !['1', '2', '3', '4', '5'].includes(form.difficulty)) {
//             setErrors({ ...errors, difficulty: "" })
//         } else {
//             setErrors({ ...errors, difficulty: "Debe ser de 1 a 5" })
//         }
//         if (form.difficulty === "") setErrors({ ...errors, difficulty: "Dificultad vacia" })
//         // validate Temporada
//         if (!form.season ||
//             !['Verano', 'Otoño', 'Invierno', 'Primavera'].includes(form.season)) {
//             setErrors({ ...errors, season: "" })
//         } else {
//             setErrors({ ...errors, season: "Deben ser Verano, Otoño, Invierno, Primavera" })
//         }
//         if (form.season === "") setErrors({ ...errors, season: "Temporada vacia" })


//     }


//     const changeHandler = (event) => {
//         const property = event.target.name;
//         const value = event.target.value;
//         validate({ ...form, [property]: value })
//         setForm({ ...form, [property]: value })
//     }

//     // crear validate con todas las restrigciones necesarias;
//     // agregar que la dificultad sea selectiva de 1 a 5
//     // countries tiene que ser un array y especificar que son el id del pais
//     // selecionar la temporada por nombre

//     // search bar conectar el back con el front
//     // 
//     // boton de filter y order completos,
//     //  paginado completo


//     const [country, setCountry] = useState([]);

//     useEffect(() => {
//         axios
//             .get("http://localhost:3001/countries") // Cambia la URL de la API según tu configuración
//             .then((response) => {
//                 setCountry(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error al cargar los países:", error);
//             });
//     }, []);
//     const countrySelectionHandler = (event) => {
//         const selectedCountry = event.target.value;
//         const isSelected = event.target.checked;

//         if (isSelected) {
//             setForm({ ...form, countries: [...form.countries, selectedCountry] });
//         } else {
//             const updatedCountries = form.countries.filter((country) => country !== selectedCountry);
//             setForm({ ...form, countries: updatedCountries });
//         }
//     };


// const submitHandler = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:3001/activities/", form)
//         .then(res => alert(res))
//         .catch(err => alert(err))
// }
// const difficultySelectionHandler = (event) => {
//     const difficultyValue = event.target.value;
//     setForm({ ...form, difficulty: difficultyValue });
// };
// const seasonSelectionHandler = (event) => {
//     const seasonValue = event.target.value;
//     setForm({ ...form, season: seasonValue });
// };

// return (
//     <form onSubmit={submitHandler}>
//         <div>
//             <label>Name</label>
//             <input type="text" value={form.name} onChange={changeHandler} name="name" />
//             {errors.name && <span>{errors.name}</span>}
//         </div>

//         <div>
//             <label>Difficulty</label>
//             <div>
//                 {[1, 2, 3, 4, 5].map((value) => (
//                     <button
//                         key={value}
//                         type="button"
//                         onClick={difficultySelectionHandler}
//                         value={value}
//                         className={form.difficulty === String(value) ? "selected" : ""}
//                     >
//                         {value}
//                     </button>
//                 ))}
//             </div>
//             {errors.difficulty && <span>{errors.difficulty}</span>}
//         </div>
//         <div>
//             <label>Season:</label>
//             <div>
//                 {["Verano", "Otoño", "Invierno", "Primavera"].map((season) => (
//                     <button
//                         key={season}
//                         type="button"
//                         onClick={seasonSelectionHandler}
//                         value={season}
//                         className={form.season === season ? "selected" : ""}
//                     >
//                         {season}
//                     </button>
//                 ))}
//             </div>
//             {errors.season && <span>{errors.season}</span>}
//         </div>


//         <div>
//             <label>Countries:</label>
//             <ul className="country-list">
//                 {country.map((country) => (
//                     <li key={country.id}>
//                         <input
//                             type="checkbox"
//                             id={country.id}
//                             value={country.id}
//                             checked={form.countries.includes(country.id)}
//                             onChange={countrySelectionHandler}
//                         />
//                         <label htmlFor={country.id}>{country.name}</label>
//                     </li>
//                 ))}
//             </ul>
//             {errors.countries && <span>{errors.countries}</span>}
//         </div>
//         <button type="submit">SUBMIT</button>
//     </form>
// )
// }
// export default Form;