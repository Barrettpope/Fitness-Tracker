const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
            required: [true, "You must specify the name of your workout"]
        },
        duration: {
            type: Number,
            trim: true,
            required: [true, "You must provide the preferred duration of your workout"]
        },
        weight: {
            type: Number,
            trim: true,
            required: [true, "You must specify how much weight you would like to use"]
        },
        reps: {
            type: Number,
            trim: true,
            required: [true, "You must specify the number of reps you would like to do"]
        },
        sets: {
            type: Number,
            trim: true,
            required: [true, "You must specify the number of sets you would like to do"]
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;