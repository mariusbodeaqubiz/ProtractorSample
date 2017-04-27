var expect = require("chai").expect;
var asyncMethods = require('./async');
var generalTests = require('./general');
var postTests = require('./posts');

describe.skip("API2", function() {
  describe("Tests", function() {
    var that = this;
    var url = "http://localhost:3000";
    var postsUrl = url + '/posts';
    var idu = '';
    var date = new Date();
    this.currentDate = date.toString();

    it("returns status 200", function(done) {
      asyncMethods.getFull(url).then(function(response) {
        generalTests.connectionSpec(response);
        done();
      });
    });

    it('should post data and make a GET for the new created post', function (done) {
      var body = {
        userId: '',
        title: that.currentDate,
        body: that.currentDate + 'it is the current time'
      };
      asyncMethods.postFull(postsUrl, body).then(function(response) {
        generalTests.connectionSpec(response);
        expect(response).not.to.be.null;
        expect(response.body.title).to.equal(body.title);
        expect(response.body.id).not.to.be.null;
        return this.postId = response.body.id;
        done();
      }).then(function() {
          asyncMethods.getFull(postsUrl + "/" + this.postId).then(function(response) {
            generalTests.connectionSpec(response);
            expect(response).not.to.be.null;
            expect(response.body.title).to.contain(that.currentDate);
            done();
          });
        });
    });
  });
});