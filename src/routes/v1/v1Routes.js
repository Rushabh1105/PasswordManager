const express = require("express");

const categoryController = require("../../controller/categoryController");
const passwordController = require("../../controller/passwordController");

const router = express.Router();

router.get("/help", (req, res) => {
    return res.json({
        status : 200,
        success : true,
        message : "hitting the help api",
        data : {
            contact_us : "+91XXXXXXXXXX",
            email_us : "abcd@xyz.com",
        }
    })
});


router.post("/category", categoryController.createCategory);
router.patch("/category/:id", categoryController.updateCategory);
router.get("/category/:name", categoryController.getCategory);
router.get("/category", categoryController.getAllCategory);
router.delete("/category/:id", categoryController.deleteCategory);

router.post("/password", passwordController.createPassword);
router.patch("/password/:id", passwordController.updatePassword);
router.delete("/password/:id", passwordController.deletePassword);
router.get("/password/:id", passwordController.getPassword);

module.exports = router;