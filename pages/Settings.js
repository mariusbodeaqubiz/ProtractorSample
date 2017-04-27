var Settings = function() {

  var that = this;

  this.changePasswordBtn = element(by.css("#main-ui-view > div > div > div:nth-child(6) > div > a > div.value"));
  this.changeUsernameBtn = element(by.css("#main-ui-view > div > div > div:nth-child(2) > div > a > div.value"));
  this.changeUsernameFld = element(by.model("userName.value"));
  this.changeEmailBtn = element(by.css("#main-ui-view > div > div > div:nth-child(3) > div > a > div.value.ng-binding"));
  this.changeEmailFld = element(by.model("emailAddress.value"));
  this.changeUsernameSaveBtn = element(by.css("[ng-click='userName.set()']"));
  this.changeEmailSaveBtn = element(by.css("[ng-click='emailAddress.set()']"));
  this.changeLanguageBtn = element(by.css("#simple-dropdown"));
  this.selectLanguageOpt = element(by.cssContainingText("[ng-repeat='language in $ctrl.languages']", "Italiano"));
  this.currentPasswordFld = element(by.name("userPass"));
  this.newPasswordFld = element(by.name("newPass"));
  this.confirmNewPasswordFld = element(by.name("confirmPass"));
  this.submitBtn = element(by.css("div.create-chapter-form.change-password-form > form > div:nth-child(4) > div > div > button"));
  this.changePasswordMessageTxt = element(by.css("#main-ui-view > div > div > div > div:nth-child(2)"));
  this.errorMessageTxt = element(by.css(".error"));

  this.changePassword = function() {
    browser.wait(EC.elementToBeClickable(that.currentPasswordFld), 10000).then(function(){
      that.currentPasswordFld.sendKeys(browser.params.secrets.userPassword);
      that.newPasswordFld.sendKeys(browser.params.secrets.userChangedPassword);
      that.confirmNewPasswordFld.sendKeys(browser.params.secrets.userChangedPassword);
    });

    browser.wait(EC.elementToBeClickable(that.submitBtn), 10000).then(function(){
      that.submitBtn.click()
    });
  };
};

module.exports = Settings;
