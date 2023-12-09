const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
    {
        rating: { type: Number, required: true},
        comment: { type: String, required: true},
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
    }
);

const Review =mongoose.model("Rivew", ReviewSchema);
module.exports =Review;