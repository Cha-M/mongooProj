const Movie = require("./model");

// class Movie {
//     constructor (title, actor = "Not specified", info = "Not specified") {
//         this.title = title;
//         this.actor = actor;
//         this.info = info;
//     }
//     //C.reate
//     async add (collection) {
//         await collection.insertOne(this);
//         //there are only two lines, not much of a need for try catch
//         return "Success";
//         //add this to the database
//     }

//     //R.ead
//     async read (collection) {
//         return await collection.findOne({title : {$eq: this.title}});
//     }


//     //U.pdate
//     async update (collection) {
//         await collection.updateOne({title : {$eq: this.title}});
//     }

//     //D.elete
//     async delete (collection) {
//         await collection.deleteOne({title : {$eq: this.title}});
//     }

//     async list (collection) {
//         return await collection.find().toArray();
//         //list all movies in the db
//     }
// }

const specified = (property) => {
    if (property == undefined || property == "Not specified") {
        return false;
    }
    else {
        return true;
    }
}

//C.reate
exports.addMovie = async (title, actor) => {
    try {
        if (specified(title)) {
            await Movie.create({ title, actor });
            return (`${title} added to database`);
        }
        else {
            return (`Title not specified`);
        }

    } catch(error) {
        if (error.code != 11000) {
            console.log(error);
        }
        else {
            return (`${title} not added\n${title} already in database`)
        }
    }
}

//R.ead
exports.readMovie = async (title) => {
    try {
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
    } catch (error) {
        console.log("readMovie error", error);
    }
}
//U.pdate
exports.updateMovie = async (title, actor) => {
    try {
        if (specified(title)) {
            if (await Movie.findOne({ title })) {
                await Movie.updateOne({ title }, { actor } );
                return (`${title} updated in database`);
            }
            else {
                return (`${title} not found in database. Use addMovie to add a movie.`);
            }
        }
        else {
            return (`Title not specified`);
        }
    } catch(error) {
        
        console.log(error);
    }
}
//D.elete
exports.deleteMovie = async (title) => {
    try {
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

    } catch (error) {
        
        console.log(error);
    }
}


//List
exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}