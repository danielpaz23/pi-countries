const { Router } = require("express");
const { getCountriesHandlers, getCountrieHandlers} = require("../handlers/countriesHandlers.js");
const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandlers);//debe ir el getVgsHandlers
countriesRouter.get("/:id", getCountrieHandlers);


module.exports = countriesRouter; 