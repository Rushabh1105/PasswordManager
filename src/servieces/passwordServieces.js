const Password = require("../models/password");

const createPassword = async (data) => {
    try {
        const newPassword = {
            website : data.website,
            username : data.username,
            password : data.password,
            category : data.category,
        }

        const response = await Password(newPassword).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}


const updatePassword = async (id, data) => {
    try {
        const response = await Password.findByIdAndUpdate(id, data);
        return response;
    } catch (err) {
        console.log(err);
    }
}


const deletePassword = async (id) => {
    try {
        const response = await Password.findByIdAndDelete(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}


const getPassword = async (id) => {
    try {
        const response = await Password.findById(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    createPassword,
    updatePassword,
    deletePassword,
    getPassword
}