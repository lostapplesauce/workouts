const Workout = require('../models/workout');

module.exports.index = async (req, res) => {
    const calves = await Workout.find({})
    res.render('workout/index', {biceps});
}

//makes function named renderNewForm
module.exports.renderNewCalvesForm = (req, res) => {
    res.render('calves/newCalve');
}