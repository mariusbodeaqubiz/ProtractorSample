var expect = require("chai").expect;
var asyncMethods = require('./async');
var generalTests = require('./general');
var postTests = require('./posts');
var RegistrationMethod = require('./RegistrationMethod.js')

describe.only("API Tests", function() {
  this.timeout(10000);
  var that = this;
  var url = "https://accweb.sweek.com/api";
  var postsUrl = url + '/login';
  var idu = '';
  var date = new Date();
  var registrationMethod = new RegistrationMethod();
  this.currentDate = date.toString();

  describe("API Registration and Login Test", function() {
    it('Should register new user, log in and get the Access Token and create story', function (done) {
      registrationMethod.sign("https://accweb.sweek.com/api/signup").then(function(response) {
        expect(response.statusCode).to.equal(200);
        return bodyData = response.request.body;
      }).then(function() {
        registrationMethod.login("https://accweb.sweek.com/api/login", bodyData).then(function(response) {
          expect(response.statusCode).to.equal(200);
          console.log("This is the AccessToken: " + response.body.access_token);
          return dicti={
            access_token: response.body.access_token,
            userName: response.request.body.userName
          };
         // done();
        }).then(function() {
          var access_token = dicti.access_token;
          var postData = JSON.stringify(
            {"userName":dicti.userName,
            "title":dicti.userName,
            "description":"<p>Good reading!</p>",
            "saveType":"finalsave",
            "id":0,
            "storyCover":"",
            "angle":"0",
            "publish":false,
            "autosave":false,
            "access_token":access_token});
          var body = "data=" + postData;
          // phantom.cookie = "accessToken=" + access_token;
          asyncMethods.postFull("https://accweb.sweek.com/api/create-story", body, access_token).then(function(response) {
            generalTests.connectionSpec(response);
            expect(response).not.to.be.null;
            done();
          }); 
        });
      });
    });
  });
});