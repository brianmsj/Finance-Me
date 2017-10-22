const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategoriesSchema = new mongoose.Schema({
  category: {type: String, required: true},
  createdBy: {
   type: Schema.Types.ObjectId,
   ref: 'User',
   required: true
 },
 label [{type: Array, required: true}],

})

const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = {Categories};
