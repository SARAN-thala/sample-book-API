var should = require('should'),
    request = require('supertest'),
    app = require('../app'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app);

describe('Book Crud Test', function () {

    after(function (done) {
        Book.remove();
        done();
    })

    it('should allow a book to be posted and return a read and _id', function (done) {
        var bookPost = {title: 'new book', author: 'saran', genre: 'Horror'};

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function (err, results) {
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done()
            })
    });

});