import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer({ countries }) {
  console.log("Countries cardsContainer:", countries);
  const activities = useSelector((state) => state.activities);

  const countryContainsActivity = (country, activity) => {
    return (
      country.Activities &&
      country.Activities.some((act) => act.name === activity)
    );
  };

  return (
    <div className={style.container}>
      {countries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          flags={country.flags}
          name={country.name}
          continents={country.continents}
          onClose={() => {}} // Aquí puedes pasar una función onClose si es necesario
          activities={activities
            .filter((activity) =>
              countryContainsActivity(country, activity.name)
            )
            .map((activity) => activity.name)}
        />
      ))}
    </div>
  );
}






// import { useSelector } from "react-redux";
// import Card from "../Card/Card";
// import style from "./CardsContainer.module.css";

// export default function CardsContainer({ countries, onClose }) {
//   return (
//     <div className={style.container}>
//       {countries.map((country) => (
//         <Card
//           key={country.id}
//           id={country.id}
//           flags={country.flags}
//           name={country.name}
//           continents={country.continents}
//           onClose={onClose}
//         />
//       ))}
//     </div>
//   );
// }





// import { useSelector } from "react-redux";
// import Card from "../Card/Card";
// import style from "./CardsContainer.module.css";

// export default function CardsContainer({ onClose }) {
//     const filteredCountries = useSelector((state) => state.filteredCountries);
//     const countries = useSelector((state) => state.countries);

//     const displayedCountries = filteredCountries.length > 0 ? filteredCountries : countries;

//     return (
//         <div className={style.container}>
//             {displayedCountries.map((country) => (
//                 <Card
//                     key={country.id}
//                     id={country.id}
//                     flags={country.flags}
//                     name={country.name}
//                     continents={country.continents}
//                     onClose={onClose}
//                 />
//             ))}
//         </div>
//     );
// }

