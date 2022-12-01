const categoryServiece = require("../servieces/categoryServieces");

const createCategory = async(req, res) => {
    try {
        const response = await categoryServiece.createCategory(req.body);
        return res.json({
            status : 200,
            success : false,
            message : "created the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create category"
        });
    }
}


const updateCategory = async(req, res) => {
    try {
        const response = await categoryServiece.updateCategory(req.params.id, req.body);
        return res.json({
            status : 200,
            success : false,
            message : "updated the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create category"
        });
    }
}


const deleteCategory = async(req, res) => {
    try {
        const response = await categoryServiece.deleteCategory(req.params.id);
        return res.json({
            status : 200,
            success : false,
            message : "deleted the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create category"
        });
    }
}


const getCategory = async(req, res) => {
    try {
        const response = await categoryServiece.getCategory(req.params.name);
        return res.json({
            status : 200,
            success : false,
            message : "fetched the category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create category"
        });
    }
}


const getAllCategory = async(req, res) => {
    try {
        const response = await categoryServiece.getAllCategory();
        return res.json({
            status : 200,
            success : false,
            message : "fetched all category",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create category"
        });
    }
}


module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategory
}