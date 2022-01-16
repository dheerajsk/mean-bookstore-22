
// In Controller, methods should only take request, 
// forward and return response.


exports.getAll = (req, res)=>{
    console.log("Get All books method is called");
    // Call repository to get data.
    res.send([]);
}