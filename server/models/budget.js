const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BudgetSchema = new mongoose.Schema({
  category: {type: String, required: true},
})

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = {Budget};
