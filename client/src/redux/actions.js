import axios from "axios";
export const GET_ACT = "GET_ACT"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_COUNTRIES = "GET_COUNTRIES"
export const ADD_ACT="ADD_ACT";
// order y filter revisar
export const FILTER= "FILTER";
export const ORDER= "ORDER";
export function filterContinents(status) {
    return {
      type: FILTER,
      payload: status,
    };
  }
  
  export function orderCards(id) {
    return {
      type: ORDER,
      payload: id,
    };
  }


export function addAct(name,difficulty, season, countries){
    try {
        return async function(dispatch){
            await axios.post(`http://localhost:3001/activities/`,name,difficulty, season, countries)
            return dispatch({
                type:ADD_ACT,
                payload: name,difficulty, season, countries,
            })
        }
    } catch (error) {
        return ({ error: error.message })
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
            const apiData = await axios.get(`http://localhost:3001/contries/${id}`);
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
