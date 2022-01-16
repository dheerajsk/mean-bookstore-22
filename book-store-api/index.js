// Configure server

// Step 1: Import Express package
const express = require("express");
const bookRoutes = require("./routers/book");

// Step 2: Create Server
const server = express();

// Step 3: Configure port
server.listen(3100);

// Custom Routes
// Redirect book related requests to book routes.
server.use('/api/Book', bookRoutes);

// Step 4: Handle request on default path
server.get("/", (req, res)=>{
    // Sending respone to client
    res.send("Hello from Express JS");
});

console.log("Server is listening on localhost:3100");