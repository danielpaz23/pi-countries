import React from "react";
import Filtro from "../../components/Filtro/Filtro.jsx";

const Home = () => {
  return (
    <>
      <h1>Vista Home</h1>
      <Filtro />
    </>
  );
};

export default Home;




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
// } from "../../redux/actions";
// import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
// import Paginado from "../../components/Paginado/Paginado.jsx";

// const Home = () => {
//   const [country, setCountry] = useState("");

//   const dispatch = useDispatch();
//   const countries = useSelector((state) =>
//     state.filteredCountries.length > 0 ? state.filteredCountries : state.countries
//   );

//   const activities = useSelector((state) => state.activities);

//   const [continentFilter, setContinentFilter] = useState("");
//   const [activityFilter, setActivityFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const countriesPerPage = 10;

//   useEffect(() => {
//     dispatch(getAct());
//     dispatch(getCountries());
//   }, [dispatch]);

//   const handleContinentFilter = (continent) => {
//     console.log("Continent Filter:", continent);
//     setContinentFilter(continent);
//     setActivityFilter("");
//     setCurrentPage(1);
//     dispatch(filterByContinent(continent));
    
//   };

//   const handleActivityFilter = (activity) => {
//     console.log("Activity Filter:", activity);
//     setActivityFilter(activity);
//     setContinentFilter("");
//     setCurrentPage(1);
//     dispatch(filterByActivity(activity));
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
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredCountries = continentFilter
//     ? countries.filter((country) => country.continents === continentFilter)
//     : countries;
//     // const filteredCountriesByActivity = activityFilter === "all"
//     // ? filteredCountries
//     // : filteredCountries.filter((country) =>
//     //     country.activities.includes(activityFilter)
//     //   );
//     const filteredCountriesByActivity = activityFilter
//   ? filteredCountries.filter((country) =>
//       country.activities.includes(activityFilter)
//     )
//   : filteredCountries;


//   // const filteredCountriesByActivity = activityFilter
//   //   ? filteredCountries.filter((country) =>
//   //       country.Activities && country.Activities.some((act) => act.Countries && act.Countries.length > 0)
//   //     )
//   //   : filteredCountries;

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

//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
//   const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

//   return (
//     <>
//       <h1>Vista Home</h1>
//       <div>
//         <h2>Filtrar por continente:</h2>
//         <button onClick={() => handleContinentFilter(null)}>Todos</button>
//         <button onClick={() => handleContinentFilter("Africa")}>África</button>
//         <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
//         <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
//         <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
//         <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
//         <button onClick={() => handleContinentFilter("Antarctic")}>Antártida</button>
//       </div>
//       <div>
//         <h1>Activities</h1>
//         <select
//           className="filter"
//           onChange={(e) => handleActivityFilter(e.target.value)}
//           defaultValue="Filter by type"
//         >
//           <option value="all">All types</option>
//           {activities.map((t) => (
//             <option value={t.name} key={t.id}>
//               {t.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <h2>Ordenar por:</h2>
//         <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//           <option value="">Ninguno</option>
//           <option value="nameAsc">Nombre Ascendente</option>
//           <option value="nameDesc">Nombre Descendente</option>
//           <option value="populationAsc">Población Ascendente</option>
//           <option value="populationDesc">Población Descendente</option>
//         </select>
//       </div>
//       <CardsContainer countries={currentCountries} />
//       <Paginado currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </>
//   );
// };

// export default Home;




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
// } from "../../redux/actions";
// import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
// import Paginado from "../../components/Paginado/Paginado.jsx";

// const Home = () => {

//     const [country, setCountry] = useState("");




//   const dispatch = useDispatch();
//   const countries = useSelector((state) =>
//     state.filteredCountries.length > 0 ? state.filteredCountries : state.countries
//   );

//   const activities = useSelector((state) => state.activities);

//   const [continentFilter, setContinentFilter] = useState("");
//   const [activityFilter, setActivityFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const countriesPerPage = 10;
// const []=useState("");
//   useEffect(() => {
//     dispatch(getAct());
//     dispatch(getCountries());
//   }, [dispatch]);

//   const handleContinentFilter = (continent) => {
//     setContinentFilter(continent);
//     setActivityFilter("");
//     dispatch(filterByContinent(continent));
//     setCurrentPage(1);
//   };
//   const handleActivityFilter = (activity) => {
//     setActivityFilter(activity);
//     setContinentFilter("");
//     const filteredCountries = countries.filter((country) =>
//       country.Activities && country.Activities.some((act) => act.name=== activity)
//     );
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
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredCountries = continentFilter
//     ? countries.filter((country) => country.continents === continentFilter)
//     : countries;

//   const filteredCountriesByActivity = activityFilter
//     ? filteredCountries.filter((country) =>
//         country.Activities && country.Activities.some((act) => act.name === activityFilter)
//       )
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

//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
//   const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

//   return (
//     <>
//       <h1>Vista Home</h1>
//       <div>
//         <h2>Filtrar por continente:</h2>
//         <button onClick={() => handleContinentFilter("")}>Todos</button>
//         <button onClick={() => handleContinentFilter("Africa")}>África</button>
//         <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
//         <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
//         <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
//         <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
//         <button onClick={() => handleContinentFilter("Antarctic")}>Antartida</button>
//       </div>
//       <div>
//         <h1>Activities</h1>
//         <select
//             className="filter"
//             onChange={(e) => handleActivityFilter(e)}
//             defaultValue="Filter by type"
//           >
//             <option disabled>Ninguna Actividad</option>
//             <option value="all">All types</option>
//             {activities.map((t) => (
//               <option value={t.name} key={t.id}>
//                 {t.name}
//               </option>
//             ))}
//           </select>
//       </div>
//       <div>
//         <h2>Ordenar por:</h2>
//         <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//           <option value="">Ninguno</option>
//           <option value="nameAsc">Nombre Ascendente</option>
//           <option value="nameDesc">Nombre Descendente</option>
//           <option value="populationAsc">Población Ascendente</option>
//           <option value="populationDesc">Población Descendente</option>
//         </select>
//       </div>
//       <CardsContainer countries={currentCountries}/>
//       <Paginado currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//     </>
//   );
// };

// export default Home;





// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCountries,
//   filterByContinent,
//   filterByActivity,
//   sortByNameAsc,
//   sortByNameDesc,
//   sortByPopulationAsc,
//   sortByPopulationDesc,getAct 
// } from "../../redux/actions";
// import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
// import Paginado from "../../components/Paginado/Paginado.jsx";

// const Home = () => {
//   const dispatch = useDispatch();
//   const countries = useSelector((state) =>
//     state.filteredCountries.length > 0 ? state.filteredCountries : state.countries
//   );

//   const activities = useSelector((state) => state.activities);

//   const [continentFilter, setContinentFilter] = useState("");
//   const [activityFilter, setActivityFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const countriesPerPage = 10;
  

//   useEffect(() => {
//     dispatch(getAct());
//   }, [dispatch]);
//   useEffect(() => {
//     dispatch(getCountries());
//   }, [dispatch]);

  
//   const handleContinentFilter = (continent) => {
//     setContinentFilter(continent);
//     dispatch(filterByContinent(continent));
//     setCurrentPage(1);
//   };

//   const handleActivityFilter = (activity) => {
//     setActivityFilter(activity);
//     dispatch(filterByActivity(activity));
//     setCurrentPage(1);
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
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredCountries = continentFilter
//     ? countries.filter((country) => country.continents === continentFilter)
//     : countries;

//   const filteredCountriesByActivity = activityFilter
//     ? filteredCountries.filter((country) =>
//         country.Activities && country.Activities.includes(activityFilter)
//       )
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

//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
//   const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

//   return (
//     <>
//       <h1>Vista Home</h1>
//       <div>
//         <h2>Filtrar por continente:</h2>
//         <button onClick={() => handleContinentFilter("")}>Todos</button>
//         <button onClick={() => handleContinentFilter("Africa")}>África</button>
//         <button onClick={() => handleContinentFilter("Americas")}>Américas</button>
//         <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
//         <button onClick={() => handleContinentFilter("Europe")}>Europa</button>
//         <button onClick={() => handleContinentFilter("Oceania")}>Oceanía</button>
//       </div>
//       <div>
//       <h1>Activities</h1>
//       <div className="activity-buttons">
//         {activities.map((activity) => (
//           <button key={activity.id}>{activity.name}</button>
//         ))}
//       </div>
//     </div>
//       <div>
//         <h2>Ordenar por:</h2>
//         <select value={sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//           <option value="">Ninguno</option>
//           <option value="nameAsc">Nombre Ascendente</option>
//           <option value="nameDesc">Nombre Descendente</option>
//           <option value="populationAsc">Población Ascendente</option>
//           <option value="populationDesc">Población Descendente</option>
//         </select>
//       </div>
//       <CardsContainer countries={currentCountries} />
//       <Paginado
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </>
//   );
// };

// export default Home;


