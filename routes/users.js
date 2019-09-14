var express = require('express');
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

// Handling The Update Request
router.put("/update/:id",(req,res,next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, (err,Updated) => {
    if(err) return next(err);
    res.json({message: "Updated SucessFully"});
  });
});

// Handling The Delete Route
router.delete("delete/:id",(req,res,next) => {
  var id = req.params.id;
  Book.findOneAndDelete(id, (err,Deleted) => {
    if(err) return next(err);
    res.json({message: "Deleted SucessFully"});
  });
});

module.exports = router;
