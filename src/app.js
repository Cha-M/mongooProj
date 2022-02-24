require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, readMovie, updateMovie, deleteMovie, list } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
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
            console.log(await list());
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