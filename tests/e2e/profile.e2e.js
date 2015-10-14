var mongoose = require('mongoose');

var server = require('../helpers/testingServer');
var databaseConfig = require('../../config/databaseConfig');

mongoose.connect(databaseConfig.MONGO_TEST);
server.listen(3000);

describe('angularjs homepage todo list', function() {
  var url = 'http://localhost:3000';

  it('should add a todo', function() {
    browser.get(url);

    element(by.model('user.email')).sendKeys('viukari@helsinki.fi');
    element(by.model('user.password')).sendKeys('elina123');
    element(by.css('button[type=submit]')).click();

    expect(element(by.css('.btn-default')).getText()).toEqual('Logout');
  });

  afterAll(function(){
    server.close();
    mongoose.connection.close();
  });
});
