const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    exxercises: [
      {
        type: {
          type: String, 
          required: true
        },
        name: {
          type: String,
          trim: true
        },
        duration: {
          type: Number,
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
