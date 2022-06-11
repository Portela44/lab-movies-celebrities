// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

/* GET movies page */
router.get("/", (req, res, next) => {
    res.render("movies/movies");
})

module.exports = router;