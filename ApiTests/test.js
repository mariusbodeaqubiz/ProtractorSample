var expect = require("chai").expect;
var asyncMethods = require('./async');
var generalTests = require('./general');
var postTests = require('./posts');

describe.skip("another", function() {
  describe("Tests", function() {
    var url = "https://jsonplaceholder.typicode.com";
    var postsUrl = url + '/posts';
    var idu = '';

    it("returns status 200", function(done) {
      asyncMethods.getFull(url).then(function(response) {
        generalTests.connectionSpec(response);
        done();
      });
    });

    it('should return response', function (done) {
      asyncMethods.getSimple(postsUrl).then(function(response) {
        postTests.listSpec(JSON.parse(response));
        done();
      })
    });

    it('should post data', function (done) {
      var body = {
        userId: 1,
        title: 'hic manebimus optime',
        body: 'hic manebimus optime'
      };
      asyncMethods.postFull(postsUrl, body).then(function(response) {
        generalTests.connectionSpec(response);
        done();
      })
    });
  });
});
