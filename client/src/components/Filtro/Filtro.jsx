

import React, { useEffect, useState , useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterByContinent,
  filterByActivity,
  sortByNameAsc,
  sortByNameDesc,
  sortByPopulationAsc,
  sortByPopulationDesc,
  getAct,
  filterByContinentAndActivity,
} from "../../redux/actions";
import CardsContainer from "../CardsContainer/CardsContainer.jsx";
import Paginado from "../Paginado/Paginado.jsx";

const Filtro = () => {
  const [continentFilter, setContinentFilter] = useState("");
  const [activityFilter, setActivityFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);



  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const filteredCountries = useSelector((state) =>
    state.filteredCountries.length > 0 ? state.filteredCountries : allCountries
  );
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getAct());
    dispatch(getCountries());
  }, [dispatch]);
  

  const handleContinentFilter = (continent) => {
    setContinentFilter(continent);
    setCurrentPage(1);// Restablecer el estado para no mostrar todos los países después de filtrar por continente
  };

  const handleActivityFilter = (activity) => {
    setActivityFilter(activity);
    setCurrentPage(1);
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleFilter = () => {
    if (activityFilter && continentFilter) {
      dispatch(filterByContinentAndActivity(continentFilter, activityFilter));
    } else if (activityFilter) {
      dispatch(filterByActivity(activityFilter));
    } else if (continentFilter) {
      dispatch(filterByContinent(continentFilter));
    } else {
      dispatch(getCountries());
    }
  };
  const filteredCountriesByContinent = continentFilter
    ? filteredCountries.filter((country) => country.continents.includes(continentFilter))
    : filteredCountries;

  const filteredCountriesByActivity = activityFilter
    ? filteredCountriesByContinent.filter((country) => country.activities.includes(activityFilter))
    : filteredCountriesByContinent;

  const sortedCountries = (() => {
    switch (sortOrder) {
      case "nameAsc":
        return filteredCountriesByActivity.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return filteredCountriesByActivity.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "populationAsc":
        return filteredCountriesByActivity.slice().sort((a, b) => a.population - b.population);
      case "populationDesc":
        return filteredCountriesByActivity.slice().sort((a, b) => b.population - a.population);
      default:
        return filteredCountriesByActivity;
    }
  })();

 
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

  return (
    <>
      <h2>Filtrar por continente:</h2>
      <button onClick={() => handleContinentFilter("")}>Todos</button>
      <button onClick={() => handleContinentFilter("Africa")}>África</button>
      <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
      <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
      <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
      <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
      <button onClick={() => handleContinentFilter("Antarctic")}>Antártida</button>

      <h2>Activities</h2>
      <select className="filter" onChange={(e) => handleActivityFilter(e.target.value)} value={activityFilter}>
        <option value="">All types</option>
        {activities.map((t) => (
          <option value={t.name} key={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <h2>Ordenar por:</h2>
      <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
        <option value="">Ninguno</option>
        <option value="nameAsc">Nombre Ascendente</option>
        <option value="nameDesc">Nombre Descendente</option>
        <option value="populationAsc">Población Ascendente</option>
        <option value="populationDesc">Población Descendente</option>
      </select>

      <CardsContainer countries={currentCountries} />
      <Paginado currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default Filtro;







// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCountries,
//   filterByContinent,
//   filterByActivity,
//   sortByNameAsc,
//   sortByNameDesc,
//   sortByPopulationAsc,
//   sortByPopulationDesc,
//   getAct,
//   filterByContinentAndActivity,
// } from "../../redux/actions";
// import CardsContainer from "../CardsContainer/CardsContainer.jsx";
// import Paginado from "../Paginado/Paginado.jsx";

// const Filtro = () => {
//   const [continentFilter, setContinentFilter] = useState("");
//   const [activityFilter, setActivityFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const dispatch = useDispatch();
//   const allCountries = useSelector((state) => state.countries);
//   const filteredCountries = useSelector((state) =>
//     state.filteredCountries.length > 0 ? state.filteredCountries : allCountries
//   );
//   const activities = useSelector((state) => state.activities);

//   useEffect(() => {
//     dispatch(getAct());
//     dispatch(getCountries());
//   }, [dispatch]);

//   useEffect(() => {
//     handleFilter();
//   }, [continentFilter, activityFilter]);

//   const handleContinentFilter = (continent) => {
//     setContinentFilter(continent);
//     setActivityFilter("");
//   };

//   const handleActivityFilter = (activity) => {
//     setActivityFilter(activity);
//   };

//   const handleSortOrderChange = (order) => {
//     setSortOrder(order);
//     switch (order) {
//       case "nameAsc":
//         dispatch(sortByNameAsc());
//         break;
//       case "nameDesc":
//         dispatch(sortByNameDesc());
//         break;
//       case "populationAsc":
//         dispatch(sortByPopulationAsc());
//         break;
//       case "populationDesc":
//         dispatch(sortByPopulationDesc());
//         break;
//       default:
//         break;
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilter = () => {
//     if (activityFilter && continentFilter) {
//       dispatch(filterByContinentAndActivity(continentFilter, activityFilter));
//     } else if (activityFilter) {
//       dispatch(filterByActivity(activityFilter));
//     } else if (continentFilter) {
//       dispatch(filterByContinent(continentFilter));
//     } else {
//       dispatch(getCountries());
//     }
//   };

//   const filteredCountriesByContinent = continentFilter
//     ? filteredCountries.filter((country) => country.continents.includes(continentFilter))
//     : filteredCountries;

//   const filteredCountriesByActivity = activityFilter
//     ? filteredCountriesByContinent.filter((country) => country.activities.includes(activityFilter))
//     : filteredCountriesByContinent;

//   const sortedCountries = (() => {
//     switch (sortOrder) {
//       case "nameAsc":
//         return filteredCountriesByActivity.slice().sort((a, b) => a.name.localeCompare(b.name));
//       case "nameDesc":
//         return filteredCountriesByActivity.slice().sort((a, b) => b.name.localeCompare(a.name));
//       case "populationAsc":
//         return filteredCountriesByActivity.slice().sort((a, b) => a.population - b.population);
//       case "populationDesc":
//         return filteredCountriesByActivity.slice().sort((a, b) => b.population - a.population);
//       default:
//         return filteredCountriesByActivity;
//     }
//   })();

//   const countriesPerPage = 10;
//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
//   const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

//   return (
//     <>
//       <h2>Filtrar por continente:</h2>
//       <button onClick={() => handleContinentFilter("")}>Todos</button>
//       <button onClick={() => handleContinentFilter("Africa")}>África</button>
//       <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
//       <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
//       <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
//       <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
//       <button onClick={() => handleContinentFilter("Antarctic")}>Antártida</button>

//       <h2>Activities</h2>
//       <select className="filter" onChange={(e) => handleActivityFilter(e.target.value)} value={activityFilter}>
//         <option value="">All types</option>
//         {activities.map((t) => (
//           <option value={t.name} key={t.id}>
//             {t.name}
//           </option>
//         ))}
//       </select>

//       <h2>Ordenar por:</h2>
//       <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//         <option value="">Ninguno</option>
//         <option value="nameAsc">Nombre Ascendente</option>
//         <option value="nameDesc">Nombre Descendente</option>
//         <option value="populationAsc">Población Ascendente</option>
//         <option value="populationDesc">Población Descendente</option>
//       </select>

//       <CardsContainer countries={currentCountries} />
//       <Paginado currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </>
//   );
// };

// export default Filtro;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCountries,
//   filterByContinent,
//   filterByActivity,
//   sortByNameAsc,
//   sortByNameDesc,
//   sortByPopulationAsc,
//   sortByPopulationDesc,
//   getAct,
//   filterByContinentAndActivity,
// } from "../../redux/actions";
// import CardsContainer from "../CardsContainer/CardsContainer.jsx";
// import Paginado from "../Paginado/Paginado.jsx";

// const Filtro = () => {
//   const [continentFilter, setContinentFilter] = useState("");
//   const [activityFilter, setActivityFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const dispatch = useDispatch();
//   const allCountries = useSelector((state) => state.countries);
//   const filteredCountries = useSelector((state) =>
//     state.filteredCountries.length > 0 ? state.filteredCountries : allCountries
//   );
//   const activities = useSelector((state) => state.activities);

//   useEffect(() => {
//     dispatch(getAct());
//     dispatch(getCountries());
//   }, [dispatch]);

//   useEffect(() => {
//     handleFilter();
//   }, [continentFilter, activityFilter]);

//   const handleContinentFilter = (continent) => {
//     setContinentFilter(continent);
//     setActivityFilter("");
//   };

//   const handleActivityFilter = (activity) => {
//     setActivityFilter(activity);
//   };

//   const handleSortOrderChange = (order) => {
//     setSortOrder(order);
//     switch (order) {
//       case "nameAsc":
//         dispatch(sortByNameAsc());
//         break;
//       case "nameDesc":
//         dispatch(sortByNameDesc());
//         break;
//       case "populationAsc":
//         dispatch(sortByPopulationAsc());
//         break;
//       case "populationDesc":
//         dispatch(sortByPopulationDesc());
//         break;
//       default:
//         break;
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilter = () => {
//     if (activityFilter && continentFilter) {
//       dispatch(filterByContinentAndActivity(continentFilter, activityFilter));
//     } else if (activityFilter) {
//       dispatch(filterByActivity(activityFilter));
//     } else if (continentFilter) {
//       dispatch(filterByContinent(continentFilter));
//     } else {
//       dispatch(getCountries());
//     }
//   };

//   const filteredCountriesByActivity = activityFilter
//     ? filteredCountries.filter((country) => country.activities.includes(activityFilter))
//     : filteredCountries;

//   const sortedCountries = (() => {
//     switch (sortOrder) {
//       case "nameAsc":
//         return filteredCountriesByActivity.slice().sort((a, b) => a.name.localeCompare(b.name));
//       case "nameDesc":
//         return filteredCountriesByActivity.slice().sort((a, b) => b.name.localeCompare(a.name));
//       case "populationAsc":
//         return filteredCountriesByActivity.slice().sort((a, b) => a.population - b.population);
//       case "populationDesc":
//         return filteredCountriesByActivity.slice().sort((a, b) => b.population - a.population);
//       default:
//         return filteredCountriesByActivity;
//     }
//   })();

//   const countriesPerPage = 10;
//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
//   const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

//   return (
//     <>
//       <h2>Filtrar por continente:</h2>
//       <button onClick={() => handleContinentFilter("")}>Todos</button>
//       <button onClick={() => handleContinentFilter("Africa")}>África</button>
//       <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
//       <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
//       <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
//       <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
//       <button onClick={() => handleContinentFilter("Antarctic")}>Antártida</button>

//       <h2>Activities</h2>
//       <select className="filter" onChange={(e) => handleActivityFilter(e.target.value)} value={activityFilter}>
//         <option value="">All types</option>
//         {activities.map((t) => (
//           <option value={t.name} key={t.id}>
//             {t.name}
//           </option>
//         ))}
//       </select>

//       <h2>Ordenar por:</h2>
//       <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//         <option value="">Ninguno</option>
//         <option value="nameAsc">Nombre Ascendente</option>
//         <option value="nameDesc">Nombre Descendente</option>
//         <option value="populationAsc">Población Ascendente</option>
//         <option value="populationDesc">Población Descendente</option>
//       </select>

//       <CardsContainer countries={currentCountries} />
//       <Paginado currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </>
//   );
// };

// export default Filtro;

