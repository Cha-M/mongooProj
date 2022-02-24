const Movie = require("./model");

exports.addMovie = async (title, actor) => {
    try {
        // const movieObj = {title: title, actor: actor};
        // await Movie.create({title: title, actor: actor});
        await Movie.create({title, actor});
        return "Success";

    } catch(error) {
        console.log(error);
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}