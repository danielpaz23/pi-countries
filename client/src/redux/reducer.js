import { ADD_ACT, GET_ACT, GET_COUNTRIES, GET_COUNTRY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, SORT_BY_POPULATION_ASC, SORT_BY_POPULATION_DESC } from "./actions";

const initialState = {
    country: [],
    countries: [],
    activities: [],
    filteredCountries: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload };
        case GET_COUNTRY:
            return { ...state, country: action.payload };
        case GET_ACT:
            return { ...state, activities: action.payload };
        case ADD_ACT:
            const addActivities = [...state.activities, action.payload];
            return { ...state, activities: [...addActivities] };

        case FILTER_BY_CONTINENT:
            const filteredByContinent = state.countries.filter(
                (country) =>
                    action.payload === "" ? true : country.continents.includes(action.payload)
            );
            return { ...state, filteredCountries: filteredByContinent };


        case FILTER_BY_ACTIVITY:
            const filteredByActivity = state.countries.filter((country) =>
                country.activities.includes(action.payload)
            );
            return { ...state, filteredCountries: filteredByActivity };
        case SORT_BY_NAME_ASC:
            const sortedByNameAsc = state.filteredCountries.slice().sort((a, b) => a.name.localeCompare(b.name));
            return { ...state, filteredCountries: sortedByNameAsc };
        case SORT_BY_NAME_DESC:
            const sortedByNameDesc = state.filteredCountries.slice().sort((a, b) => b.name.localeCompare(a.name));
            return { ...state, filteredCountries: sortedByNameDesc };
        case SORT_BY_POPULATION_ASC:
            const sortedByPopulationAsc = state.filteredCountries.slice().sort((a, b) => a.population - b.population);
            return { ...state, filteredCountries: sortedByPopulationAsc };
        case SORT_BY_POPULATION_DESC:
            const sortedByPopulationDesc = state.filteredCountries.slice().sort((a, b) => b.population - a.population);
            return { ...state, filteredCountries: sortedByPopulationDesc };
        default:
            return state;
    }
};

export default rootReducer;