const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Month} = require('../models/month');
const {User} = require('../models/user');
const {Categories} = require('../models/categories');

const router = express.Router();

const jsonParser = bodyParser.json();

const monthData = ["January","February","March","April","May","June","July","August",
"September","October","November","December"]

router.post('/newbudget',passport.authenticate('jwt', {session: false}),(req,res) => {
  var d = new Date()
  var newMonth = {
    month: monthData[d.getMonth()],
    createdBy: req.user._id
  }
  Month.find(newMonth)
  .count()
  .then(count => {
    if(count > 0)
    return res.json({message: "Budget already exists"})
    else {
      Month.create(newMonth)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
    }
  })
})
router.get('/currentbudget/:curmonth', passport.authenticate('jwt', {session: false}), (req,res) => {
  var d = new Date()
  var current;
  if(req.params.curmonth == monthData[d.getMonth()]) {
    current = req.params.curmonth
  }
  else {
    return res.status(500).json({error: "ERROR"})
  }
  var currentBudget = {
    month: current,
    createdBy: req.user._id
  }
  Month.find(currentBudget)
  .count()
  .then(count => {
    if(count < 1) {
      return res.json({message: "create budget"})
    }
    else {
      Month.find(currentBudget)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
    }
  })
})
router.put('/newcategory/:curmonth', passport.authenticate('jwt', {session: false}), (req,res) => {
  Categories.create({category:req.body.category})
  .then((item) => {
  let d = new Date()
  let current;
  if(req.params.curmonth == monthData[d.getMonth()]) {
    current = req.params.curmonth
  }
  else {
    return res.status(500).json({error: "ERROR"})
  }
  let currentBudget = {
    month: current,
    createdBy: req.user._id
  }
  Month.findOneAndUpdate(currentBudget, {$push: {categories: item}})
  .exec()
  .then((response) => {
    Month.find(response._id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
  }
  )

})})



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

 router.post('/newcategory', passport.authenticate('jwt', {session: false}),(req,res) => {
       var record = {
         category: req.body.category
       }
       Categories.create({record})
       .then(data => {
       Month.findOneAndUpdate({createdBy: req.user._id,month:req.params.month}, {$push: {categories: data}})
       })
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
    })










module.exports = {router};
