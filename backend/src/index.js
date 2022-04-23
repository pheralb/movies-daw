import app from "./app";
require("dotenv").config();


// Start the server on port... ->
const port = process.env.PORT || 3000;
app.listen(port);
console.log("🚀 [backend] Server listening on port:", port);
