require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");

const { addMovie, readMovie, updateMovie, deleteMovie, list, add, deleteItem } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        console.log(yargsObj.media);
        //C.reate
        // if (yargsObj.addMovie) {
        //     console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.info));
        //     //add functionality
        // }
        // //R.ead
        // else if (yargsObj.readMovie) {
        //     console.log(await readMovie(yargsObj.title));
        // }
        // //U.pdate
        // else if (yargsObj.updateMovie) {
        //     console.log(await updateMovie(yargsObj.title, yargsObj.actor, yargsObj.info));
        // }
        // //D.elete
        // else if (yargsObj.deleteMovie) {
        //     console.log(await deleteMovie(yargsObj.title));
        // }
        //List
        if (yargsObj.list) {
            // console.log("yargs.media", yargsObj.media);
            console.log(await list(yargsObj.media));
        }
        //New
        //C.reate
        else if (yargsObj.add) {
            console.log(await add(yargsObj.title, yargsObj.actor, yargsObj.info, yargsObj.media));
            //add functionality
        }
        //R.ead
        else if (yargsObj.read) {
            console.log(await read(yargsObj.title, yargsObj.media));
        }
        //U.pdate
        else if (yargsObj.update) {
            console.log(await update(yargsObj.title, yargsObj.actor, yargsObj.info, yargsObj.media));
        }
        //D.elete
        else if (yargsObj.delete) {
            console.log(await deleteItem(yargsObj.title, yargsObj.media));
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