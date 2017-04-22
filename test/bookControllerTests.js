var should = require('should'),
    sinon = require('sinon');

describe('Book Controller Tests', function () {
    describe('POST', function () {
        it('should not allow a empty title on POST', function () {
            var Book = function (book) {this.save = function () {}};

            var req = { body: { author: 'saran'}};

            var res = {status: sinon.spy(), send: sinon.spy()};

            var bookController = require('../controllers/bookController')(Book);

            bookController.post(req, res);

            res.status.calledWith(201).should.equal(true, 'Bad Status '+ res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
});