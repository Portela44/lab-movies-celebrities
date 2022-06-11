// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");


// all your routes here

/* GET movies page */
router.get("/", async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        res.render("movies/movies", {movies});
    } catch (error) {
        next(error)
    }   
})

/* GET new-movies page with celebrity info*/
router.get("/create", async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find({});
        res.render("movies/new-movie", {celebrities});
    } catch (error) {
        next(error);
    }
    
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

/* GET movie-details page with movie id info*/
router.get("/:movieId", async (req, res, next) => {
    const {movieId} = req.params;
    try {
        const movie = await Movie.findById(movieId).populate("cast");
        res.render("movies/movie-details", {movie});
        console.log(movie);
    } catch (error) {
        next(error);
    }
})

module.exports = router;