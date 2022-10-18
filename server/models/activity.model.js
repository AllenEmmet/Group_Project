const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    exercise:{
        type:String,
        required:[false,"An Exercise is required"],
        enum:{
            values:[
                'Lunges',
                'Pushups',
                'Squats',
                'Pullups',
                'Burpees'
            ],
            message:'{VALUE} is not supported'
        }
    },
    duration: {
        type: Number,
        required: [false, "Activity Duration is required"],
        minLength: [2, "Activity's duration must have at least 2 characters"],
    },
    burnedcalories: {
        type: Number,
        required: [false, "Activity Duration is required"],
        minLength: [2, "Activity's duration must have at least 2 characters"],
    },
    status: {
        type: Boolean,
        required: [false, "Status is required"],
        default: false,
    },
    desc: {
        type: String,
        minLength: [3, "Activity's Description must have at least 3 characters"],
    },

})

module.exports = mongoose.model("Activity", ActivitySchema); 


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