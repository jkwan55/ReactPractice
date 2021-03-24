var express = require("express");
var router = express.Router();
var db = require('../database.js');

module.exports = {
    checkUser: (req, res) => {
        const {username, password} = req.body;
        var query = 'Select username from user where username=? and password=?';
        db.query(query, [username, password])
        .then(name => {
            console.log(name)
            res.status(200).send(name)
        }).catch(err => {
            res.status(500).send(err)
        })
    }
}

router.get("/", function(req, res, next) {
    console.log('this is the body' + req.body);
    alert('hi')
    res.send("API is working properly");
});

module.exports = router;