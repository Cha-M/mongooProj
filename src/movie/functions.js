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
    if (specified == "Not specifed") {
        return false;
    }
    else {
        return true;
    }
}

//C.reate
exports.addMovie = async (title, actor) => {
    try {
        // const movieObj = {title: title, actor: actor};
        // await Movie.create({title: title, actor: actor});
        await Movie.create({ title, actor });
        return (`${title} added to database`);

    } catch(error) {
        console.log(error);
    }
}

//R.ead
exports.readMovie = async (title) => {
    try {
        if (specified(title)) {
            await Movie.find({ title }, (title) => { return (`${title} found in database`) });
        }
        else {
            return (`${title} not found in database`);
        }
    } catch (error) {
        console.log(error);
    }
}
//U.pdate
exports.updateMovie = async (title, actor) => {
    try {
        if (specified(title)) {
            await Movie.updateOne({ title }, { actor } );
            return (`${title} updated in database`);
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
            await Movie.deleteOne({ title });
            return (`${title} removed from database`);
        }
        else {
            return (`Title not specified`);
        }
    } catch(error) {
        
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