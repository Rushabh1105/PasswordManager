const passwordServiece = require("../servieces/passwordServieces");

const createPassword = async(req, res) =>{
    try {
        const response = await passwordServiece.createPassword(req.body);
        return res.json({
            status : 200,
            success : false,
            message : "created the password",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create password"
        });
    }
}


const updatePassword = async(req, res) =>{
    try {
        const response = await passwordServiece.updatePassword(req.params.id, req.body);
        return res.json({
            status : 200,
            success : false,
            message : "created the password",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot update password"
        });
    }
}


const deletePassword = async(req, res) =>{
    try {
        const response = await passwordServiece.deletePassword(req.params.id);
        return res.json({
            status : 200,
            success : false,
            message : "created the password",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot detete password"
        });
    }
}


const getPassword = async(req, res) =>{
    try {
        const response = await passwordServiece.getPassword(req.params.id);
        return res.json({
            status : 200,
            success : false,
            message : "created the password",
            data : response
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot fetch password"
        });
    }
}

module.exports = {
    createPassword,
    updatePassword,
    deletePassword,
    getPassword
}