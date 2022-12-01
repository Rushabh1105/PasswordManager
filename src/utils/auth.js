const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user");

passport.use("signup", new localStrategy(
    {
        usernameField : "email",
        passwordField : "password",
    },

    async (email, password, done) => {
        try {
            const user = await User.create({email, password});
            return done(null, user, {message : "signup successful"});

        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
));

passport.use("login", new localStrategy(
    {
        usernameField : "email",
        passwordField : "password",
    },
    async (email, password, done) => {
        try {
            const user = await User.findOne({email});
            if(!user){
                return done(null, false, {message : "user not found"});
            }
            
            const validate = await user.isValidPassword(password);
            //console.log(validate);
            if(!validate){
                return done(null, false, {message : "wrong password"});
            }

            return done(null, user, {message : "login successful"});
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
));

passport.use(new jwtStrategy(
    {
        secretOrKey : "TOP_SECRET",
        jwtFromRequest : extractJWT.fromUrlQueryParameter("secret_token")
    },

    async (token, done) => {
        try {
            return done(null, token.user)
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
))