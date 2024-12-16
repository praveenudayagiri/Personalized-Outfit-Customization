const mongoose = require("mongoose");

const connectDB = () => {
     
    mongoose.connect(
    "mongodb+srv://praveenudayagiri724:PRAVEEN@cluster0.lvusg.mongodb.net/praveendb?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() =>{
    console.log("Database connection established...");
    app.listen(9000,()  => {
        console.log("server is sucessfully listening on port 9000....");
    });
}) 
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

};
module.exports = connectDB;
