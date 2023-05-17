const {Router}= require("express");
const activitiesRouter= Router();
const {getActivitiesHandlers, createActivitiesHandlers}=require("../handlers/activitiesHandlers.js")

const validate = (req, res, next) =>{
    const {name, description, platforms, background_image, released, rating, genres} = req.body;
    console.log("pasando por el validate");
    if(!name ) return res.status(400).json({error:"Missing name"});
    console.log("pasando por el name");
    if(!description) return res.status(400).json({error:"Missing description"});
    console.log("pasando por el des");
    if(!platforms || !Array.isArray(platforms)) return res.status(400).json({error:"Missing platforms"});
    console.log("pasando por el pla");
    if(!background_image) return res.status(400).json({error:"Missing background_image"});
    console.log("pasando por el ima");
    if(!released) return res.status(400).json({error:"Missing released"});
    console.log("pasando por el rele");
    if(!rating) return res.status(400).json({error:"Missing rating"});
    console.log("pasando por el raing");
    if(!genres || !Array.isArray(genres)) return res.status(400).json({error:"Missing genres"});
    console.log("valida los genres");
    next();
}

activitiesRouter.get("/", getActivitiesHandlers)
activitiesRouter.post("/", createActivitiesHandlers)



module.exports= activitiesRouter;