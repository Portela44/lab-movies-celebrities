// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie")

// all your routes here

/* GET celebrities page */
router.get("/", async (req, res, next) => {
    const celebrities = await Celebrity.find({});
    try {
        res.render("celebrities/celebrities", {celebrities});
    } catch (error) {
        next(error);
    }
})

/* GET new-celebrities page */
router.get("/create", (req, res, next) => {
    try {
        res.render("celebrities/new-celebrity");
    } catch (error) {
        next(error);
    }
})

/* POST new-celebrity in database */
router.post("/create", async (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(req.body);
    try {
        await Celebrity.create({name, occupation, catchPhrase});
        res.redirect("/celebrities");
    } catch (error) {
        res.redirect("/celebrities/create");
    }
})

/* GET celebrity-details page with celebrity id info*/
router.get("/:celebrityId", async (req, res, next) => {
    const {celebrityId} = req.params;
    try {
        const celebrity = await Celebrity.findById(celebrityId)
        res.render("celebrities/celebrity-details", celebrity);
    } catch (error) {
        next(error);
    }
});

/* POST delete celebrity*/
router.post("/:celebrityId/delete", async (req, res, next) => {
    const {celebrityId} = req.params;
    try {
        await Celebrity.findByIdAndDelete(celebrityId);
        res.redirect("/celebrities");
    } catch (error) {
        next(error);
    }
});

/* GET/POST edit celebrity*/

router.get("/:celebrityId/edit", async (req, res, next) => {
    const {celebrityId} = req.params;
    try {
        const celebrity = await Celebrity.findById(celebrityId)
        res.render("celebrities/edit-celebrity", {celebrity});
    } catch (error) {
        next(error);
    }
});

router.post("/:celebrityId/edit", async (req, res, next) => {
    const {celebrityId} = req.params;
    const {name, occupation, catchPhrase} = req.body;
    try {
        await Celebrity.findByIdAndUpdate(celebrityId, {name, occupation, catchPhrase}, {new: true});
        res.redirect(`/celebrities/${celebrityId}`);
    } catch (error) {
        next(error);
    }
});

module.exports = router;