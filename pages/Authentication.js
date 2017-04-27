var Authentication = function(){

	var that = this;
	
	this.loginModalTxt = element(by.css("h4.modal-title.ng-binding"));
	this.emailFld = element(by.name("userEmail"));
	this.usernameFld = element(by.name("userName"));
	this.passwordFld = element(by.name("userPass"));
	this.submitLoginBtn = element(by.css("[type='submit']"));
	this.missingCredentialsTxt = element.all(by.css("div.error.ng-binding"));
	this.loggedInUserTxt = element(by.css("div.full-name.ng-binding"));
	this.loggedInUsernameTxt = element(by.css("div.user-name.ng-binding"));
	this.logoutBtn = element(by.css(".logout-menu-item"));
	this.loginBlockerModal = element(by.css("div.modal-backdrop.fade.leave.leave-active"));
	this.blockerModal = element(by.css(".signup-modal-window"));

	this.login = function(username, password){
		this.usernameFld.clear();
		this.usernameFld.sendKeys(username);

		this.passwordFld.clear();
		if (!password) {
			this.passwordFld.sendKeys(browser.params.secrets.personalUserPassword);
		}
		else if (password === "changedPassword") {
			this.passwordFld.sendKeys(browser.params.secrets.userChangedPassword);
		}
		else if (!password && password !== "changedPassword") {
			this.passwordFld.sendKeys(password)};

		browser.wait(EC.elementToBeClickable(that.submitLoginBtn), 10000).then(function(){
      that.submitLoginBtn.click();
    });

    browser.wait(EC.not(EC.presenceOf(that.loginBlockerModal)));
	};

	this.registration = function(email, username, password){
		browser.wait(EC.elementToBeClickable(that.emailFld), 10000).then(function(){
      that.emailFld.sendKeys(email);

      that.usernameFld.sendKeys(username);

      that.passwordFld.sendKeys(password);
    });

    browser.wait(EC.elementToBeClickable(that.submitLoginBtn), 10000).then(function(){
      that.submitLoginBtn.click();
    });

    browser.wait(EC.not(EC.presenceOf(that.loginBlockerModal)));
	};

	this.logout = function(){
		browser.wait(EC.not(EC.presenceOf(that.loginBlockerModal)));

		browser.wait(EC.elementToBeClickable(that.logoutBtn), 10000).then(function(){
      that.logoutBtn.click();
    });
	};
}

module.exports = Authentication;