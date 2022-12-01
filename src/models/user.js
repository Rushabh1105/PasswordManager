const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
}, {timestamps : true});


userSchema.pre("save", async function encryptPassword(next){
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});


userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const User = mongoose.model("User", userSchema);

module.exports = User;