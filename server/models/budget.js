const mongoose = require('mongoose');


const BudgetSchema = new mongoose.Schema({
  categories: {type: String},
})

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = {Budget};
