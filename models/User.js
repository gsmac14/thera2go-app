var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('userThera2go', UserSchema);

module.exports = mongoose.model('userThera2go');
