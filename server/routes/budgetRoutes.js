const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Month} = require('../models/month');
const {User} = require('../models/user');

const router = express.Router();

const jsonParser = bodyParser.json();


router.post('/newbudgets',passport.authenticate('jwt', {session: false}),(req,res) => {
  var id = req.user._id
  var months = [{month:"January",createdBy:id},
                {month:"February",createdBy:id},
                {month:"March",createdBy:id},
                {month:"April",createdBy:id},
                {month:"May",createdBy:id},
                {month:"June",createdBy:id},
                {month:"July",createdBy:id},
                {month:"August",createdBy:id},
                {month:"September",createdBy:id},
                {month:"October",createdBy:id},
                {month:"November",createdBy:id},
                {month:"December",createdBy:id}]
   Month.insertMany(months)
  .then(data => res.status(200).json(data))
  .catch(error => res.status(500).json(error));
})

router.get('/mynewbudgets', passport.authenticate('jwt', {session: false}), (req, res) => {
  Month.find({createdBy:req.user._id})
  .then(month => {
     User.findOneAndUpdate({_id: req.user._id}, {$push: {months: {$each: month }}})
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
    })
  })

router.get('/mybudgets', passport.authenticate('jwt', {session: false}), (req,res) => {
  User.find({_id: req.user._id})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.get('/removebudgets', passport.authenticate('jwt', {session: false}), (req, res) => {
     User.findOneAndUpdate({_id: req.user._id}, {$set: {months: [] }})
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
    })












module.exports = {router};
