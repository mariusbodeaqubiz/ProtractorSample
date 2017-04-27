var RegistrationMethod = function() {
  var _this = this;
  var expect = require("chai").expect;
  var asyncMethods = require('./async');
  var generalTests = require('./general');
  var Helpers = require("./../pages/Helpers.js");
  var helpers = new Helpers();
  var fs = require("fs");
  var secrets = fs.readFileSync("secrets.json");
  var jsonContent = JSON.parse(secrets);
  var url = "https://accweb.sweek.com/api";

  _this.userData = {
    userEmail: helpers.emailGenerator(),
    userName: helpers.usernameGenerator(),
    userPass: jsonContent.userPassword
  }

  _this.sign = function(uri) {

    var postData = JSON.stringify(_this.userData);

    var body = 'data=' + postData;
    return asyncMethods.postFull(uri, body).then(function(response) {
      generalTests.connectionSpec(response, 200);
      expect(response.statusCode).to.equal(200);
      console.log("This is the userid: " + response.body.userid);

      return response;
    });
  };

  _this.login = function(uri, loginData) {

    var postData = loginData;

    var body = postData;
    console.log("This is the sent body: "+ body);
    return asyncMethods.postFull(uri, body).then(function(response) {
      generalTests.connectionSpec(response, 200);
      expect(response.statusCode).to.equal(200);
      console.log(response.body.access_token);

      return response;
    });
  };
};

module.exports = RegistrationMethod;