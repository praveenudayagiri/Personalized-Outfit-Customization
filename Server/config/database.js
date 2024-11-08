const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://praveenudayagiri724:np5hdBsNAtO4lIlD@cluster0.lvusg.mongodb.net/praveendb?retryWrites=true&w=majority&appName=Cluster0"

    );
};
module.exports = connectDB;