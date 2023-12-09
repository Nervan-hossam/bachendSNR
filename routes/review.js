const review = require("express").Router();
const Review = require("../models/reviewModels");

review.post("/add review", async(req,res) => {
    const newReview = new Review(req.body);

    try{
        const savedReview = await newReview.sava();
        res.status(200).json(savedReview);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports =review;