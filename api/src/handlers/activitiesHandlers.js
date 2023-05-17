const { createActivity, getAllActivities} = require("../controllers/activitiesControllers.js")

//get de Activities
const getActivitiesHandlers = async (req, res) => {
    console.log("pasando por handler get");
    //get para traer todos los games
    const results= await getAllActivities();
    res.status(200).json(results);
};

const createActivitiesHandlers = async (req, res) => {
    //para un nuevo Activities
    console.log("pasando por handler");
    const { name, difficulty, season, countries} = req.body;
    
    try {
        const newActivity = await createActivity(name, difficulty, season, countries)
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    getActivitiesHandlers, createActivitiesHandlers,
};