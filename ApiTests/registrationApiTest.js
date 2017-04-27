var expect = require("chai").expect;
var asyncMethods = require('./async');
var generalTests = require('./general');
var postTests = require('./posts');
var Helpers = require("./../pages/Helpers.js");
var fs = require("fs");
var secrets = fs.readFileSync("secrets.json");
var jsonContent = JSON.parse(secrets);

describe("API Registration Test", function() {
	this.timeout(10000);

  describe("API Login Test", function() {
  	var helpers = new Helpers();
    var that = this;
    var url = "https://accweb.sweek.com/api";
    var postsUrl = url + '/signup';
    var idu = '';
    var date = new Date();
    this.currentDate = date.toString();

    it("Should sign up a new user via API", function (done) {
      var postData = JSON.stringify({
        userEmail:helpers.emailGenerator(),
        userName:helpers.usernameGenerator(),
        userPass:jsonContent.userPassword,
        lang:"us"
      });

      var body = 'data=' + postData;
      asyncMethods.postFull(postsUrl, body).then(function(response) {
        generalTests.connectionSpec(response, 200);
        expect(response.statusCode).to.equal(200);
        console.log(response.body.access_token);
        console.log(response.body.userid);
        // expect(response.body.title).to.equal(body.title);
        // expect(response.body.id).not.to.be.null;
        // return this.postId = response.body.id;
        done();
      })
      // .then(function() {
      //     asyncMethods.getFull(postsUrl + "/" + this.postId).then(function(response) {
      //       generalTests.connectionSpec(response);
      //       expect(response).not.to.be.null;
      //       expect(response.body.title).to.contain(that.currentDate);
      //       done();
      //     });
      //   });
    });
  });
});