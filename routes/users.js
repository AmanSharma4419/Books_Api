var express = require('express');
var router = express.Router();
// Requring The Model Of Schema
var Book = require("../Models/Books");
// Handling The Post Request
router.post("/create",(req,res) => {
  Book.create(req.body,(err,Added) => {
    if(err) return next(err);
    res.json({message:"Book added Sucessfully"})
  })
})

module.exports = router;
