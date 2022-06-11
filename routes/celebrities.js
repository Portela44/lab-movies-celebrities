// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

// all your routes here

/* GET new-celebrities page */
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
})

/* POST new-celebrities in database */
router.post("/create", async (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(req.body)
    try {
        await Celebrity.create({name, occupation, catchPhrase});
        res.redirect("/celebrities");
    } catch (error) {
        res.redirect("/celebrities/create");
    }
})

module.exports = router;