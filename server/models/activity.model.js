const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    exercise: {
        type:String,
        enum:{
            values:[
                'Lunges',
                'Pushups',
                'Squats',
                'Dumbbell Curls',
                'Bench Press',
                'Pull-ups',
                'Dips',
                'Bicep Curls',
            ],
            
        required:[true,"An Activity is required"]
    },
    duration: {
        type: String,
        required: [true, "Activity Duration is required"],
        minLength: [3, "Activity's duration must have at least 3 characters"],
    },


}

});

module.exports = mongoose.model("Activity", ActivitySchema); 