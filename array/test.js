//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
const nock = require('nock')
const Request = require('supertest')


chai.use(chaiHttp);
describe('Server', () => {
    const request = Request(server);
    describe('/get', () => {
      it('Should return a 404 when invalid route', done => {
        request
          .get('/api/notfound')
          .expect(404)
          .end(done);
      });
    });
  });