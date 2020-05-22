const express = require("express");
const router = express.Router();

var db = require('../database/db')

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.get("/getinstances", (req, res, next) => {
    db.find({},function(err,docs) {
        // Start issuing commands after callback...
        if(err){
            res.status(400).json({"error":err.message})
            return;
        }
        return res.json({"message":"Success","data":docs})
        console.log("database loaded")
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
    db.insert(data, function (err, newDoc) {  
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        return res.json({
            "message": "success",
            "data": newDoc,
            "id" : this._id
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
    db.update({_id:req.params.id}, data, {},(err)=>{
        if(err){
            res.status(400).json({"error": res.message})
            return;
        }
        return res.json({
            message: "success",
            data:data
        })
    });
})

router.delete("/deleteinstance/:id", (req, res, next) => {
    db.remove ({_id:req.params.id}, {},(err)=>{
        if(err){
            res.status(400).json({"error": res.message})
            return;
        }
        else return res.json({"message":"deleted"})
    });
})

module.exports = router ;
