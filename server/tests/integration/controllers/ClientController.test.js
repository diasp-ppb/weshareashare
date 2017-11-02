const request = require('supertest');

describe('Client controller', function() {
  it('respond with json', function(done) {
     request(sails.hooks.http.app)
      .post('/clients')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});