// Configure server

// Step 1: Import Express package
const express = require("express");

// Step 2: Create Server
const server = express();

// Step 3: Configure port
server.listen(3100);

// Step 4: Handle request on default path
server.get("/", (req, res)=>{
    // Sending respone to client
    res.send("Hello from Express JS");
});

console.log("Server is listening on localhost:3100");