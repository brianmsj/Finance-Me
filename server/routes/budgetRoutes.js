const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Budget} = require('../models/budget');
const {User} = require('../models/user');

const router = express.Router();

const jsonParser = bodyParser.json();


// router.post('/', jsonParser, (req,res) => {
//
//    .then(data => {
//      res.status(201).json(data)
//    })
//    .catch(err => {
//      res.status(500).json({message: 'INTERNAL SERVER ERROR'})
//    })
// })

router.put('/:category', jsonParser, (req,res) => {
  Budget.findOneAndUpdate(req.params.category,{category: req.body.category})
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(500).json({message: 'INTERNAL SERVER ERROR'});
  })
})

module.exports = {router};
