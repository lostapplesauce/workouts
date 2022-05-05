const Workout = require('../models/workout');

module.exports.index = async (req, res) => {
    const biceps = await Workout.find({})
    res.render('workout/index', {biceps});
}

//makes function named renderNewForm
module.exports.renderNewForm = (req, res) => {
    res.render('/new');
}