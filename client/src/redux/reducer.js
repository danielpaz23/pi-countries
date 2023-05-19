import { ADD_ACT, FILTER, GET_ACT, GET_COUNTRIES, GET_COUNTRY, ORDER } from "./actions";

const initialstate ={
    country:[],
    countries:[],
    activities:[],
};
const rootReducer= (state=initialstate, action)=>{
    switch(action.type){
        case GET_COUNTRIES: 
            return {...state, countries: action.payload};
        case GET_COUNTRY:
            return {...state, country: action.payload};
        case GET_ACT:
            return {...state, activities:action.payload};
        case ADD_ACT:
            const addActivities = [...state.activities, action.payload]
            return {...state, activities: [...addActivities]};



            // order y filter revisar
        case FILTER:
            return{
                ...state,
                countrie: state.countries.filter(
                    (e) => e.continents === action.payload
                ),
            };
        case ORDER:
            let order

        
        default:
            return {...state};
    }
}

export default rootReducer;
//<>