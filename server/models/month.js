const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MonthSchema = new mongoose.Schema({
  month: {type: String, required: true},
  createdBy: {
   type: Schema.Types.ObjectId,
   ref: 'User',
   required: true
 },
 categories: []

})

const Month= mongoose.model('Month', MonthSchema);

module.exports = {Month};
