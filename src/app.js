require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");

const { addMovie, readMovie, updateMovie, deleteMovie, list, addShow } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        console.log(yargsObj.mediaType);
        //C.reate
        if (yargsObj.addMovie) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.info));
            //add functionality
        }
        //R.ead
        else if (yargsObj.readMovie) {
            console.log(await readMovie(yargsObj.title));
        }
        //U.pdate
        else if (yargsObj.updateMovie) {
            console.log(await updateMovie(yargsObj.title, yargsObj.actor, yargsObj.info));
        }
        //D.elete
        else if (yargsObj.deleteMovie) {
            console.log(await deleteMovie(yargsObj.title));
        }
        //List
        else if (yargsObj.list) {
            console.log("yargs.mediaType", yargsObj.mediaType);
            console.log(await list(yargsObj.mediaType));
        }

        //New
        //C.reate
        else if (yargsObj.add) {
            console.log(await add(yargsObj.title, yargsObj.actor, yargsObj.info, yargsObj.mediaType));
            //add functionality
        }

        else {
            console.log("Command not recognised");
        }
        console.log("Disconnecting...")
        await mongoose.disconnect();
    } catch(error) {
        console.log(error);
    }
}

app(yargs.argv);