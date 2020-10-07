const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            enum: ["resistance", "cardio"],
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            trim: true,
            required: true
        },
        weight: {
            type: Number,
            trim: true,
            required: function () {
                return this.type === "resistance"
            }
        },
        reps: {
            type: Number,
            trim: true,
            required: function () {
                return this.type === "resistance"
            }
        },
        sets: {
            type: Number,
            trim: true,
            required: function () {
                return this.type === "resistance"
            }
        },
        distance: {
            type: Number,
            trim: true,
            required: function () {
                return this.type === "cardio"
            }
        }

    }]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;