var should = require('should');
var assert = require('assert');
var request = require('supertest');

describe('User API', function(){
  var url = 'localhost:3000';

  var shouldBeForbidden= function(err, res){
    if (err) {
      throw err;
    }

    res.status.should.be.equal(403);
  }

  var authenticate = function(user){
    return request(url)
      .post('/users/authenticate')
      .send(user);
  }

  it('should not get signed in user without authenticating', function(done){
    request(url)
      .get('/users/logged-in')
      .send()
      .end((err, res) => {
        shouldBeForbidden(err, res);
        done();
      });
  });

  it('should get signed in user with a correct token', function(done){
    authenticate({ email: 'viukari@helsinki.fi', password: 'elina123' })
      .end((err, res) => {
        var token = res.body.token;

        request(url)
          .get('/users/logged-in')
          .set('Authorization', 'Bearer ' + token)
          .end((err, res) => {
            res.status.should.be.equal(200);
          });

        done();
      });
  });

  it('should not receive a token when authenticating with wrong email and password', function(done){
    authenticate({ email: 'kalle.ilves@helsinki.fi', password: 'kalle' })
      .end((err, res) => {
        shouldBeForbidden(err, res);
        done();
      });
  });

  it('should receive a token when authenticating with correct email and password', function(done){
    authenticate({ email: 'viukari@helsinki.fi', password: 'elina123' })
      .end((err, res) => {
        var body = res.body;
        body.should.have.property('token').which.is.a.String;
        done();
      });
  });
});
