const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const {Month} = require('../models/month');
const {User} = require('../models/user');

const router = express.Router();

const jsonParser = bodyParser.json();


router.post('/newbudgets',passport.authenticate('jwt', {session: false}),(req,res) => {
  var months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
 for(let i=0;i<months.length;i++) {
   Month.create({
       month: months[i],
       createdBy: req.user._id,
   }).then(month => res.status(200).json(month))
 }

})

router.get('/mybudgets', passport.authenticate('jwt', {session: false}), (req, res) => {

  const query = {
    createdBy: {$eq: req.user._id}
  };

  Month.find(query)
    .exec()
    .then(budgets => {
      budgets.length > 0 ? res.json(budgets) : res.json({message: `You Haven't Created Any Budgets Yet`});
    })
    .catch(err => {
      res.status(500).json({error: 'something went wrong'});
    });

});












module.exports = {router};
