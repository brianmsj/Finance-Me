const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Month} = require('../models/month');
const {User} = require('../models/user');

const router = express.Router();

const jsonParser = bodyParser.json();


router.get('/month/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Month.find({createdBy:req.user._id},
             {month: req.params.month})
  .then(month => {
     Month.find({month: req.params.month})
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

module.exports = {router}
