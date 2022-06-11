// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");


// all your routes here

/* GET movies page */
router.get("/", async (req, res, next) => {
    const movies = await Movie.find({});
    console.log(movies);
    res.render("movies/movies", {movies});
})

/* GET new-movies page */
router.get("/create", async (req, res, next) => {
    const celebrities = await Celebrity.find({});
    res.render("movies/new-movie", {celebrities});
})

/* POST new-movie in database */
router.post("/create", async (req, res, next) => {
    const {title, genre, plot, cast} = req.body;
    try {
        await Movie.create({title, genre, plot, cast});
        res.redirect("/movies");
    } catch (error) {
        res.redirect("/movies/create");
    }
})

module.exports = router;