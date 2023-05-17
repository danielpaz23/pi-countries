const {getCountrieById, getAllCountries, searchCountrieByName} = require("../controllers/countriesControllers.js")

//get de nombres 
const getCountriesHandlers = async (req, res) => {
    //get para traer todos los games
    const {name} = req.query;
    const results= name ? await searchCountrieByName(name): await getAllCountries();
    res.status(200).json(results);
};

const getCountrieHandlers = async (req, res) => {
    //traer el game por el id
    const { id } = req.params;
    console.log(id);
    try {
        const countrie = await getCountrieById(id);
        res.status(200).json(countrie);
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 
};
module.exports = {
    getCountriesHandlers,
    getCountrieHandlers,
};