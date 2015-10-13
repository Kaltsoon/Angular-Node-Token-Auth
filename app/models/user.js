var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String
});

UserSchema.methods.toJSON = function(){
  var user = this.toObject();

  delete user.password;

  return user;
}

module.exports = mongoose.model('User', UserSchema);
