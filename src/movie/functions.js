const yargs = require("yargs");
const { Movie, Show } = require("./model");

const specified = (property) => {
    if (property == undefined || property == "Not specified") {
        return false;
    }
    else {
        return true;
    }
}


//List
exports.list = async (media) => {
    // console.log(media);
    try {
        return media == "Show" ? await Show.find({}) : await Movie.find({});

    } catch (error) {
        console.log(error);
    }
}

//C.reate
exports.addItem = async (title, actor, info, media) => {
    try {
        console.log("add media = ",media);
        switch(media) {
            case "Show":
                if (specified(title)) {
                    await Show.create({ title, actor, info });
                    return (`${title} added to database`);
                }
                else {
                    return (`Title not specified`);
                }
            case "Movie":
                if (specified(title)) {
                    await Movie.create({ title, actor, info });
                    return (`${title} added to database`);
                }
                else {
                    return (`Title not specified`);
                }
            default:
                return (`${title} not added. --media not specified`);
        }

    } catch(error) {
        if (error.code != 11000) {
            console.log(error);
        }
        else {
            return (`${title} not added. ${title} already in database`)
        }
    }
}

//R.ead
exports.readItem = async (title, media) => {
    try {
        switch(media) {
            case "Show":
                if (specified(title)) {
                    if (await Show.findOne({ title })) {
                        return (`${title} found in database`);
                    }
                    else {
                        return (`${title} not found in database`); 
                    }    
                }
                else {
                    return (`Title not specified`);
                }
            case "Movie":
                if (specified(title)) {
                    if (await Movie.findOne({ title })) {
                        return (`${title} found in database`);
                    }
                    else {
                        return (`${title} not found in database`); 
                    }
                    
                }
                else {
                    return (`Title not specified`);
                }
            default:
                return (`${title} not added. --media not specified`);

        }
    } catch (error) {
        console.log("readMovie error", error);
    }
}

//U.pdate
exports.updateItem = async (title, actor, info, media) => {
    try {
        switch(media) {
            case "Show" :
                if (specified(title)) {
                    if (await Show.findOne({ title })) {
                        await Show.updateOne({ title }, { actor, info });
                        return (`${title} updated in database`);
                    }
                    else {
                        return (`${title} not found in database. Use addMovie to add a movie.`);
                    }
                }
                else {
                    return (`Title not specified`);
                }
            case "Movie" :
                if (specified(title)) {
                    if (await Movie.findOne({ title })) {
                        await Movie.updateOne({ title }, { actor, info });
                        return (`${title} updated in database`);
                    }
                    else {
                        return (`${title} not found in database. Use addMovie to add a movie.`);
                    }
                }
                else {
                    return (`Title not specified`);
                }
                default:
                    return (`${title} not added. --media not specified`);
            }
    } catch(error) {
        
        console.log(error);
    }
}

//D.elete
exports.deleteItem = async (title, media) => {
    try {
        switch(media) {
            case "Show" :
                if (specified(title)) {
                        const deleted = (await Show.deleteOne({ title })).deletedCount;
                        if (deleted) {
                            return (`${title} deleted from database.`);
                        }
                        else {
                            return (`${title} not deleted from database.`);
                        }

                }
                else {
                    return (`Title not specified`);
                }
            case "Movie" :
                if (specified(title)) {
                        const deleted = (await Movie.deleteOne({ title })).deletedCount;
                        if (deleted) {
                            return (`${title} deleted from database.`);
                        }
                        else {
                            return (`${title} not deleted from database.`);
                        }

                }
                else {
                    return (`Title not specified`);
                }
        }

    } catch (error) {
        
        console.log(error);
    }
}