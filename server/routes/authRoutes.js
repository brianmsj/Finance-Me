const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');



const createAuthToken = user => {
    return jwt.sign({user}, 'brianmcminn', {
        subject: user.username,
        expiresIn: '7d',
        algorithm: 'HS256'
    });
};

const router = express.Router();

router.post('/login', passport.authenticate('basic', {session: false}),
    (req, res) => {
        const authToken = createAuthToken(req.user.apiRepr());
        res.json({authToken});
    }
);

router.post('/refresh',
    // The user exchanges an existing valid JWT for a new one with a later
    // expiration
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const authToken = createAuthToken(req.user);
        res.json({authToken});
    }
);

module.exports = {router};
