const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LabelSchema = new mongoose.Schema({
  label: {type: String, required: true},
  month: {
   type: Schema.Types.ObjectId,
   ref: 'Month',
   required: true
 },
 spent: {type: Number}

})

const Label = mongoose.model('Label', LabelSchema);

module.exports = {Label};
