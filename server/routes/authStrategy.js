const passport = require('passport');
const {BasicStrategy} = require('passport-http');
const {
    Strategy: JwtStrategy,
    ExtractJwt
} = require('passport-jwt');

const {User} = require('../models/user');
const config = require('../config');

const basicStrategy = new BasicStrategy((username, password, callback) => {
    let user;
    User.findOne({username: username})
        .then(_user => {
            user = _user;
            if (!user) {
                return Promise.reject({
                    reason: 'LoginError',
                    message: 'Incorrect username or password'
                });
            }
            return user.validatePassword(password);
        })
        .then(isValid => {
            if (!isValid) {
                return Promise.reject({
                    reason: 'LoginError',
                    message: 'Incorrect username or password'
                });
            }
            return callback(null, user);
        })
        .catch(err => {
            if (err.reason === 'LoginError') {
                return callback(null, false, err);
            }
            return callback(err, false);
        });
});

const jwtStrategy = new JwtStrategy(
    {
        secretOrKey: 'brianmcminn',
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
        algorithms: ['HS256']
    },
    (payload, done) => {
        done(null, payload.user);
    }
);

module.exports = {basicStrategy, jwtStrategy};
