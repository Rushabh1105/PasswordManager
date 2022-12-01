const Category = require("../models/category");

const createCategory = async (data) => {
    try {
        const newCategory = {
            name : data.name,
            description : data.description,
        }

        const response = await Category(newCategory).save();
        return response;

    } catch (err) {
        console.log(err);
    }
}


const updateCategory = async (id, data) => {
    try {
        const response = await Category.findByIdAndUpdate(id, data);
        return response;
    } catch (err) {
        console.log(err);
    }
}


const deleteCategory = async (id) => {
    try {
        const response = await Category.findByIdAndDelete(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}


const getCategory = async (name) => {
    try {
        const response = await Category.findOne({name});
        return response;
    } catch (err) {
        console.log(err);
    }
}


const getAllCategory = async () => {
    try {
        const response = await Category.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory,
}