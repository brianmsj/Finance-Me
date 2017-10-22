const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LabelSchema = new mongoose.Schema({
  Label: {type: String, required: true},
  createdBy: {
   type: Schema.Types.ObjectId,
   ref: 'User',
   required: true
 },
 spent: {type: Number}

})

const Label = mongoose.model('Label', LabelSchema);

module.exports = {Label};
