const { Country, Activity, countryactivity} = require("../db");
const axios = require ('axios');


const createActivity = async (name,difficulty, season, countries) => {
    const newActivity = await Activity.create({ name, difficulty, season });
    await newActivity.setCountries(countries);
    return newActivity;
}
const getAllActivities = async () => {
    const databaseActivities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ['name'],
            through: { attributes: [] },
        }
    });
    return results = [...databaseActivities];
}

module.exports={getAllActivities, createActivity};