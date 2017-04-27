var Helpers = function(){

  this.date = new Date();
  
  this.getBrowserName = function(){
    return browser['browserName'];
  };

  this.emailGenerator = function(){
    var email = "qa" + this.date.getTime().toString() + "@mailinator.com";

    return email;
  };

  this.usernameGenerator = function(){
    var username = "qa" + this.date.getTime().toString();

    return username;
  };
}

module.exports = Helpers;
