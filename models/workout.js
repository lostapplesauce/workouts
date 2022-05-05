const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    title: String,
    reps: Number,
    image: [
        {
            url: String,
            filename: String
        }
    ],
    description: String
});



module.exports = mongoose('Workout', WorkoutSchema);