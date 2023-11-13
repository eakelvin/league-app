const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leagueSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    games: {
        type: Number
    },
    win: {
        type: Number
    },
    draw: {
        type: Number
    },
    loss: {
        type: Number
    },
    scored: {
        type: Number
    },
    conceeded: {
        type: Number
    },
    points: {
        type: Number
    }
})

module.exports = mongoose.model('League', leagueSchema)