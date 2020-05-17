const express = require("express");
const router = express.Router();

var db = require('../dao')

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.get("/getinstances", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

router.post("/createinstance", (req, res, next) => {
    var errors=[]
    if (!req.body.name){
        errors.push("No Name specified");
    }
    if (!req.body.host){
        errors.push("No Host specified");
    }
    if (!req.body.port){
        errors.push("No Port specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        host: req.body.host,
        port : req.body.port,
        password : req.body.password
    }
    var sql ='INSERT INTO user (name, host, port, password) VALUES (?,?,?,?)'
    var params =[data.name, data.host, data.port, data.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

router.patch("/updateinstance/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        host: req.body.host,
        port : req.body.port,
        password : req.body.password
    }
    db.run(
        `UPDATE user set 
           name = COALESCE(?,name), 
           host = COALESCE(?,host),
           port = COALESCE(?,port), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.host, data.port, data.password, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

router.delete("/deleteinstance/:id", (req, res, next) => {
    db.run(
        'DELETE FROM user WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

module.exports = router ;