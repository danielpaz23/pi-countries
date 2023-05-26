import {
    FILTER_BY_CONTINENT_AND_ACTIVITY,
    FILTER_BY_ACTIVITY_AND_CONTINENT, SEARCH_COUNTRY_NAME, ADD_ACT, GET_ACT, GET_COUNTRIES, GET_COUNTRY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, SORT_BY_NAME_ASC, SORT_BY_NAME_DESC, SORT_BY_POPULATION_ASC, SORT_BY_POPULATION_DESC
} from "./actions";

const initialState = {
    country: [],
    countries: [],
    activities: [],
    filteredCountries: [],
    allCountries: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload, allCountries: action.payload };
        case SEARCH_COUNTRY_NAME:
            return { ...state, country: action.payload };
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

        // case FILTER_BY_CONTINENT_AND_ACTIVITY:
        //     return {
        //         ...state,
        //         filteredCountries: action.payload,
        //     };
        case FILTER_BY_CONTINENT_AND_ACTIVITY:
            const continent = action.payload.continent;
            const activity = action.payload.activity;
            const filteredByContinentAndActivity = state.countries.filter(
                (country) =>
                    country.continent === continent &&
                    country.activities.some((act) => act.name === activity)
            );
            return {
                ...state,
                filteredCountries: filteredByContinentAndActivity,
            };
        case FILTER_BY_ACTIVITY_AND_CONTINENT:
            const act = action.payload.activity;
            const cont = action.payload.continent;
            const filteredByActivityAndContinent = state.countries.filter(
                (country) =>
                    country.activities.some((activity) => activity.name === act) &&
                    country.continent === cont
            );
            return {
                ...state,
                filteredCountries: filteredByActivityAndContinent,
            };

        case FILTER_BY_ACTIVITY:
            const filterActivity = state.allCountries
            const filteredByActivity = action.payload === "all" ? filterActivity.filter((act) => act.activities.length > 0) : filterActivity.filter((act) => act.activities && act.activities.map((e) => e.name).includes(action.payload));
            return { ...state, countries: filteredByActivity };


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