// Requring The Express
var express = require('express');

// Extracting The Router
var router = express.Router();

// Requring The Model Of Schema
var Book = require("../Models/Books");

// Handling The Post Request
router.post("/create",(req,res) => {
  Book.create(req.body,(err,Added) => {
    if(err) return next(err);
    res.json({message:"Book added Sucessfully"});
  });
});

// Handling The Get Request
router.get("/read",(req,res,next) => {
  Book.find({},(err,Books) => {
    if(err) return next(err);
    res.json({Books});
  });
});

// Handling The Delete Request
router.delete("/delete/:id",(req,res,next) => {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err,Deleted) => {
    if(err) return next(err);
    res.json({message: "Deleted SucessFully"});
  });
});

// Handling The Update Request
router.put("/update/:id",(req,res,next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id,req.body,(err,Updated) => {
    if(err) return next(err);
    res.json({message: "Updated SucessFully"});
  });
});

module.exports = router;
