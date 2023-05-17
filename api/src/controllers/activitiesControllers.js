const { Country, Activity, countryactivity} = require("../db");
const axios = require ('axios');


const createActivity = async (name,difficulty, season, countries) => {
    console.log("controller create")
    const newActivity = await Activity.create({ name, difficulty, season });
    await newActivity.setCountries(countries);
    return newActivity;
}


const getAllActivities = async () => {
    console.log("controller get")
    const databaseActivities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ['name'],
            through: { attributes: [] },
        }
    });
    // const activities = cleanArrayDB(databaseActivities)

    return results = [...databaseActivities];
}

module.exports={getAllActivities, createActivity};