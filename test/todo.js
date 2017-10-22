let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();
let baseUrl = 'http://localhost:3000/'

chai.use(chaiHttp);
describe('TODO', () => {

 

  // The /GET route
  describe('/GET display ', () => {
      it('it should GET all todo list', (done) => {
        chai.request(baseUrl)
            .get(baseUrl +'todo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.empty;
              done();
            });
      });
  });

  // The /POST route
  describe('/POST item', () => {
      it('it should POST the item into the list', (done) => {
        let item = 'task 4';
        chai.request(baseUrl)
            .post(baseUrl + '/todo/add/')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
  });

  //  The /GET/:id route
  describe('/GET/:id  to do item', () => {
      it('it should GET an item by the given id', (done) => {
        let item = { id: 1, text: 'task 4'};
            chai.request(baseUrl)
            .get('/todo/edit/:id' + item.id)
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
        });
  });

  //The /DELETE/:id route
  describe('/DELETE/:id item', () => {
      it('it should DELETE a item given the id', (done) => {
        let item = [{ id: 1, text: 'task 4'},{ id: 2, text: 'task 4'}];
                chai.request(baseUrl)
                .delete(baseUrl + '/todo/delete/:id/' + item.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.be.empty;
                  done();
                });
      });
  });

});
