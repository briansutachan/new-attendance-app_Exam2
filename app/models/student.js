// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var studentSchema = mongoose.Schema({
    email: { type: String, lowercase: true, trim: true },
    password: String,
    name: { type: String, trim: true },
    emailConfirmed: { type: Boolean, default: false },
    emailConfirmationToken: String,
    resetPasswordToken: String,
    resetPasswordExpires: Number
});

// generating a hash
studentSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
studentSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// checking email confirmation
studentSchema.methods.isEmailConfirmed = function () {
    return this.emailConfirmed;
};

// create the model and expose it to our app
module.exports = mongoose.model('Student', studentSchema);