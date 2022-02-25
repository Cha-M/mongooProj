const mongoose = require("mongoose");

const movieSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    info: {
        type: String,
        default: "Not specified"
    }
});

const Movie = mongoose.model("Movie", movieSchema);


const showSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    info: {
        type: String,
        default: "Not specified"
    }
});

const Show = mongoose.model("Show", showSchema);

//Exports with object destructuring
module.exports = {
    Movie,
    Show
};