const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    food: {
        type: String,
        required: [true, "Food Name is required"],
        minLength: [2, "Food Name must have at least 2 characters"],
    },
    calories: {
        type: Number,
        required: [true, "Calories are required"],
    },

})

module.exports = mongoose.model("Food", FoodSchema); 