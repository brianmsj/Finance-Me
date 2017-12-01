const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Driver} = require('../models/driver');


const router = express.Router();

const jsonParser = bodyParser.json();

router.post('/newdriver', passport.authenticate('jwt', {session: false}),(req,res) => {
  var driver = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    location: {
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode

    },
    driversLicense: req.body.driversLicense,
    phoneNumber: req.body.phoneNumber
  }
  Driver.create(driver)
  .then(response => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})


module.exports = {router};
