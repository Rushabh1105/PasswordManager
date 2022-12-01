const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const apiRouter = require("./src/routes/apiRouter");
const {connect} = require("./src/database/database");
const authRouter = require("./src/routes/authRoutes");
require("./src/utils/auth");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use("/", authRouter);
app.use("/api", passport.authenticate("jwt", {session : false}),apiRouter);


app.listen(3000, async () => {
    await connect();
    console.log("mongodb connected successfully...");
    console.log("server started successfully...");

    /* const user = await User.create({
        email : "a@b.com",
        password : "12345"
    });

    console.log(user) */
})