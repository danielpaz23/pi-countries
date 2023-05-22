import './App.css';
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form } from "./views"
import NavBar from "./components/NavBar/NavBar";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import { useState } from "react";
import SearchBar from './components/SearchBar/SearchBar';
function App() {

  const location = useLocation();
  const [countries, setCountries] = useState("");
  function onSearch(country) {
    return fetch(`http://localhost:3001/countries?name=${country}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCountries (data);
        } else {
          throw new Error("No se encontró el país");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // function onSearch(countrie) {
  //   return fetch(`http://localhost:3001/countries?name=${countrie}`)  //agrege un return
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.length > 0) {
  //         return data;
  //       } else {
  //         throw new Error("No hay Pais");
  //       }
  //     })
  // }

  function onClose(id) {
    setCountries(countries.filter((element) => element.id !== id));
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}

      <Route exact path="/" component={Landing} />
      <Route exact path="/countries/:idPais" component={Detail} />
      <Route exact path="/activities" component={Form} />
      <Route exact path="/home" render={() => <Home />} element={<CardsContainer  countries={countries} onClose={onClose} />}></Route>
      {/* < Route path="/home" render={()=><Home />}/>  */}
      {/* util para pasar props */}
    </div>
  );
}

export default App;
