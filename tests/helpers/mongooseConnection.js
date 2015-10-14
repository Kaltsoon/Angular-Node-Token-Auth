var mongoose = require('mongoose');
var databaseConfig = require('../../config/databaseConfig');

function connect(){
  switch(process.env.ENV){
    case 'travis':
      mongoose.connect(databaseConfig.MONGO_TRAVIS);
      break;
    default:
      mongoose.connect(databaseConfig.MONGO_TEST);
  }
}

module.exports = connect;
