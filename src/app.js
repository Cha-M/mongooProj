require("./db/connection");
const yargs = require("yargs");
const app = async () => {
    try {
        if (yargsObj.add) {
            //add functionality
        }
        else if (yargsObj.list) {
            //list functionality
        }
        else {
            console.log("Incorrect command");
        }
    } catch(error) {
        console.log(error);
    }
}

app(yargs.argv);