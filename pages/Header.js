var Header = function() {
	
	this.loginBtn = element(by.css("[ng-click='user.login()']"));
	this.signUpBtn = element(by.css("[ng-click='home.signup()']"));
	this.hamburgerMenuBtn = element(by.css("div.hamburger-menu"));
	this.pageTitleTxt = element(by.css(".page-title"));
}

module.exports = Header;