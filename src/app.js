require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");

const { list, addItem, readItem, updateItem, deleteItem, filteredList } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        //List
        if (yargsObj.list) {
            // console.log("yargs.media", yargsObj.media);
            console.log(await list(yargsObj.media));
        }
        //New
        //C.reate
        else if (yargsObj.add) {
            console.log(await addItem(yargsObj.title, yargsObj.actor, yargsObj.info, yargsObj.media));
            //add functionality
        }
        //R.ead
        else if (yargsObj.read) {
            console.log(await readItem(yargsObj.title, yargsObj.media));
        }
        //U.pdate
        else if (yargsObj.update) {
            console.log(await updateItem(yargsObj.title, yargsObj.actor, yargsObj.info, yargsObj.media));
        }
        //D.elete
        else if (yargsObj.delete) {
            console.log(await deleteItem(yargsObj.title, yargsObj.media));
        }

        else if (yargsObj.filter) {
            console.log("Media: ", yargsObj.media, ", Actor: ", yargsObj.actor, ", Info: ", yargsObj.info, ", Filter: ", yargsObj.filter);
            console.log(await filteredList(yargsObj.actor, yargsObj.info, yargsObj.media, yargsObj.filter));
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