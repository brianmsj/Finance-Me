const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  username: {type: String, required: true, unique: true},
  email: String,
  password: {type: String, required: true},
  months: Array

}
)

UserSchema.methods.apiRepr = function() {
    return {
        _id: this._id,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        months: this.months
    };
};
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
};
const User = mongoose.model('User', UserSchema);

module.exports = {User};
