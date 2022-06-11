const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET movies page */
router.get("/movies", (req, res, next) => {
  res.render("movies/movies");
})

/* GET celebrities page */
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/celebrities");
})

module.exports = router;
