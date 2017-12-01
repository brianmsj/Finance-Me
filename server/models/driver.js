const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  location: {
    address: String,
    city: String,
    state: String,
    zipCode: String,
  },
  driversLicense: String,
  phoneNumber: String
})

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = {Driver};
