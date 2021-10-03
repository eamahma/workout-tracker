const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.get('/api/workouts', async (req, res) => {
    try {
        let lastWorkouts = await Workout.aggregate([{
            $addFields:{
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])

        res.json(lastWorkouts)
    } catch (err) {
        res.status(500).json(err.message)
    }
})


router.get('/api/workouts/range', async (req, res) => {
    try {
        let rangeWorkouts = await Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }]).sort({
           _id: -1 
        }).limit(7);
        res.json(rangeWorkouts)
    } catch(err) {
        res.status(500).json(err.message)
    }
})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/stats.html'))
})

module.exports = router;
