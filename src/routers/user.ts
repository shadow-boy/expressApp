

import express, { Router } from "express"
var router = express.Router()
router.post("/add", (req, res, next) => {
    res.send(req.query)
})
router.get("/default", (req, res) => {
    res.send("default")
})


router.get('/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

router.get("/banner", (req, res) => {
    res.redirect("default")
})

router.get("/error", async (req, res) => {
    // throw new Error("broken!")
    throw new Error("went wrong!")
    // res.status(500).send('Something broke!')

})

export default router