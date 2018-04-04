// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var attendanceSchema = mongoose.Schema({
    sid: String,
    date: Date,
    signature: String,
    onSite: { type: Boolean, default: false },
});


// create the model and expose it to our app
module.exports = mongoose.model('Attendance', attendanceSchema);