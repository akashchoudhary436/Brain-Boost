const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes.js");


const app = express();
dotenv.config();
app.use(express.json());


const connectDb = async() =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server Connected to database");
    } 
    catch (error) {
        console.log("Server Not connected to db",error.message);
        
    }
    
};
connectDb();




app.get("/",(req, res) =>{
    res.send("API is running")
});
app.use("/user",userRoutes);



const PORT = process.env.PORT 
app.listen(PORT,console.log("Server is running"));

