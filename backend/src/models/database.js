import mongoose from "mongoose";

require("dotenv").config();

const host = process.env.DBHOST

mongoose.connect(host)
    .then(db => console.log("📋 [backend] Database connected"))
    .catch(error => console.log(`❌ [backend] Unable to connect to Database : ${error}`))
    