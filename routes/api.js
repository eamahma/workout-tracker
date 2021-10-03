const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get('/api/workouts', async (req, res) => {
    try {
        let allWorkouts = await Workout.aggregate([{
            $addFields:{
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])

        res.json(allWorkouts)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;
