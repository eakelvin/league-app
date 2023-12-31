const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    goal: {
        type: Number,
        // required: true
    },
    assist: {
        type: Number,
        // required: true
    }
});

module.exports = mongoose.model('Stats', statSchema)
