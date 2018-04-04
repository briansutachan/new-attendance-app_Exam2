var Attendance = require('../models/attendance');

app.post('/addAttendace', function(req, res){
    return Attendance.find().pretty();
});