import axios from "axios";
export const GET_ACT = "GET_ACT"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const ADD_ACT="ADD_ACT";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITY ="FILTER_BY_ACTIVITY"
export const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC"
export const SORT_BY_NAME_DESC = "SORT_BY_NAME_DESC"
export const SORT_BY_POPULATION_ASC = "SORT_BY_POPULATION_ASC"
export const SORT_BY_POPULATION_DESC = "SORT_BY_POPULATION_DESC"

export const filterByContinent = (continent) => ({
    type: FILTER_BY_CONTINENT,
    payload: continent,
  });
// export const filterByContinent = (continent) => ({
//     type: FILTER_BY_CONTINENT,
//     payload: continent,
//   });
  
  export const filterByActivity = (activity) => ({
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  });
  
  export const sortByNameAsc = () => ({
    type: SORT_BY_NAME_ASC,
  });
  
  export const sortByNameDesc = () => ({
    type: SORT_BY_NAME_DESC,
  });
  
  export const sortByPopulationAsc = () => ({
    type: SORT_BY_POPULATION_ASC,
  });
  
  export const sortByPopulationDesc = () => ({
    type: SORT_BY_POPULATION_DESC,
  });
  export function addAct(name, difficulty, season, countries) {
    try {
        return async function (dispatch) {
            await axios.post(`http://localhost:3001/activities/`, { name, difficulty, season, countries });
            return dispatch({
                type: ADD_ACT,
                payload: { name, difficulty, season, countries },
            });
        };
    } catch (error) {
        return ({ error: error.message });
    }
}


export const getCountries = () => {
    try {
        return async function (dispatch) {
            const apiData = await axios.get(`http://localhost:3001/countries/`);
            const countries = apiData.data;
            dispatch({ type: GET_COUNTRIES, payload: countries })
        }
    } catch (error) {
        return ({ error: error.message })
    }
}
export const getCountry = (id) => {
    try {
        return async function (dispatch) {
            const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
            const country = apiData.data;
            dispatch({ type: GET_COUNTRY, payload: country })
        }
    } catch (error) {
        return ({ error: error.message })
    }

}
export const getAct = () => {
    try {
        return async function (dispatch) {
            const apiData = await axios.get(`http://localhost:3001/activities/`);
            const activity = apiData.data;
            dispatch({ type: GET_ACT, payload: activity })
        }
    } catch (error) {
        return ({ error: error.message })
    }
}
