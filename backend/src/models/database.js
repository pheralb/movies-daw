import mongoose from "mongoose";

require("dotenv").config();

const host = process.env.DBHOST

mongoose.connect(host)
    .then(db => console.log("📋 [backend] [DB] Database connected"))
    .catch(error => console.log(`❌ [backend] [DB] Unable to connect to Database : ${error}`))
    