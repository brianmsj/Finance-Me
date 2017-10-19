const mongoose = require('mongoose');


const BudgetSchema = new mongoose.Schema({
  category: String
})

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = {Budget};
