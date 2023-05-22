import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterByContinent, filterByActivity, sortByNameAsc, sortByNameDesc, sortByPopulationAsc, sortByPopulationDesc } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx"



// hacer funcionar los filtrados y ordenamiento con el cardscontainer
// armar la searchbar}
// el detail tiene que mostrar las activities, 
// armar paginado
const Home = () => {
    const dispatch = useDispatch();
    const [continentFilter, setContinentFilter] = useState("");
    const [activityFilter, setActivityFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);
    const countries = useSelector((state) => state.filteredCountries.length > 0 ? state.filteredCountries : state.countries);

    // const countries = useSelector((state) => {
    //     if (state.filteredCountries.length > 0) {
    //         return state.filteredCountries;
    //     }
    //     return state.countries;
    // });

    //   const handleContinentFilter = (continent) => {
    //     dispatch(filterByContinent(continent));
    //   };
    const handleContinentFilter = (continent) => {
        dispatch(filterByContinent(continent));
      };
      
      const handleActivityFilter = (activity) => {
        setActivityFilter(activity);
        dispatch(filterByActivity(activity));
      };
      
      const handleSortOrderChange = (order) => {
        setSortOrder(order);
        switch (order) {
          case "nameAsc":
            dispatch(sortByNameAsc());
            break;
          case "nameDesc":
            dispatch(sortByNameDesc());
            break;
          case "populationAsc":
            dispatch(sortByPopulationAsc());
            break;
          case "populationDesc":
            dispatch(sortByPopulationDesc());
            break;
          default:
            break;
        }
      };
    return (
        <>
            <h1>Vista Home</h1>
            <div>
                <h2>Filtrar por continente:</h2>
                <button
                    className={continentFilter === "" ? "active" : ""}
                    onClick={() => handleContinentFilter("")}
                >
                    Todos
                </button>
                <button
                    className={continentFilter === "Africa" ? "active" : ""}
                    onClick={() => handleContinentFilter("Africa")}
                >
                    África
                </button>
                <button
                    className={continentFilter === "Americas" ? "active" : ""}
                    onClick={() => handleContinentFilter("Americas")}
                >
                    Américas
                </button>
                <button
                    className={continentFilter === "Asia" ? "active" : ""}
                    onClick={() => handleContinentFilter("Asia")}
                >
                    Asia
                </button>
                <button
                    className={continentFilter === "Europe" ? "active" : ""}
                    onClick={() => handleContinentFilter("Europe")}
                >
                    Europa
                </button>
                <button
                    className={continentFilter === "Oceania" ? "active" : ""}
                    onClick={() => handleContinentFilter("Oceania")}
                >
                    Oceanía
                </button>

            </div>
            <div>
                <h2>Filtrar por actividad:</h2>
                <button onClick={() => handleActivityFilter("")}>Todas</button>
                {/* Agrega tus botones de actividades aquí */}
            </div>
            <div>
                <h2>Ordenar países:</h2>
                <button onClick={() => handleSortOrderChange("nameAsc")}>Nombre (ascendente)</button>
                <button onClick={() => handleSortOrderChange("nameDesc")}>Nombre (descendente)</button>
                <button onClick={() => handleSortOrderChange("populationAsc")}>Población (ascendente)</button>
                <button onClick={() => handleSortOrderChange("populationDesc")}>Población (descendente)</button>

            </div>
            <CardsContainer countries={countries} />
        </>
    );
};

export default Home;
//     useEffect(() => {
//         dispatch(getCountries());
//     }, [dispatch])
//     return (
//         <>
//             <h1>vista Home</h1>
//             <CardsContainer/>
//         </>
//     )
// }
// export default Home;