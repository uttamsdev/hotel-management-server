import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";


async function main(){
    mongoose.connect(config.database_url as string)
    app.listen(config.port, ()=> {
        console.log("Server is running at port: ",config.port);
    })
}

main();