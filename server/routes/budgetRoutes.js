const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Month} = require('../models/month');
const {User} = require('../models/user');

const router = express.Router();

const jsonParser = bodyParser.json();


router.post('/newbudgets',passport.authenticate('jwt', {session: false}),(req,res) => {
  var months = ["January","February","March","April","May","June","July","August","September"
                ,"October","November","December"];
 for(let i=0;i<months.length;i++) {
   Month.create({
       month: months[i],
       createdBy: req.user._id,
   }).then(month => res.status(200).json(month))
 }

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












module.exports = {router};
