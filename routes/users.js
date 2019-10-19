const express = require("express");
const router = express.Router();

let users = []

router.post("/add", (req, res, next) => {
            console.log("req.body", req.body)
            let data = {
                username: req.body.username,
                userid: req.body.userid,
                hobby: req.body.hobby
            }
            users.push(data)
            res.send(data)
})

router.get("/", (req, res) => {
    res.send(req.body)
})

router.get("/:userid", (req, res) => {
    res.send(req.body)
})

router.delete("/user", (req, res) => {
    console.log("user has been deleted!!!")
    // res.send(req.body)
})

module.exports = router;