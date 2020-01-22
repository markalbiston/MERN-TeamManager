const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            2,
            "Name must be at least 2 characters in length."
        ]
    },
    position: {
        type: String,
        required: [
            false
        ]
    },
    status: {
        game1: {type: Number},
        game2: {type: Number},
        game3: {type: Number}
    }
    // statusgame1: {type: Number},
    // statusgame2: {type: Number},
    // statusgame3: {type: Number},

}, {timestamps: true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;