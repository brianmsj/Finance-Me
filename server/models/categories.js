const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new mongoose.Schema({
 category: String,

})

const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = {Categories};
