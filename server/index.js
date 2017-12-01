const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const {router: usersRouter} = require('./routes/userRoutes');
const {router: authRouter } = require('./routes/authRoutes');
const {router: budgetRouter} = require('./routes/budgetRoutes');
const {router: monthRouter} = require('./routes/monthroute');
const {router: driverRouter} = require('./routes/driverRoute');
const {basicStrategy, jwtStrategy} = require('./routes/authStrategy');



mongoose.Promise = global.Promise
let secret = {
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: 'brianmcminn',
  JWT_EXPIRY: '365d'
};

if(process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}
global.secret = secret

const app = express();
app.use(bodyParser.json());


// Logging
app.use(morgan('common'));


// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});



app.use(passport.initialize());
passport.use(basicStrategy);
passport.use(jwtStrategy);


app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/budget', budgetRouter);
app.use('/api/monthroute',monthRouter)
app.use('/api/monthroute',driverRouter)



app.get(
    '/api/protected',
    (req, res) => {
        console.log(req.user)
        return res.json({
            data: 'Budgets are Great!!!!'
        });
    }
);

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});



let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect(secret.DATABASE_URL || process.env.DATABASE_URL, err => {
            if(err) {
              return reject(err);
            }
            console.log("Db Connected");
            server = app.listen(port, () => {
              resolve();
            }).on('error', reject);
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer, secret
};
