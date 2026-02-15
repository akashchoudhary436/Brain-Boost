const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength: [2, "Name must be at least 2 characters"],
        maxLength: [30, "Name must be less than 30 characters"],
    },

    email : {
        type : String,
        required : true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please fill a valid email address"],
    },
    password : {
        type : String,
        required : true,
        minLength: [8, "Password must be at least 8 characters"],
    },
},
{
    timeStamp : true,
}
);

userModel.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save", async function (next) {
    if (!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User",userModel);
module.exports = User;