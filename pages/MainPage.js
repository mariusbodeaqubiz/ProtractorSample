var MainPage = function (){

  this.settingsBtn = element(by.css(".menu-item.menu-item-icon-right.settings-menu-item.ng-binding"));
  this.myStoriesBtn = element(by.css(".my-works-menu-item"));
  this.overlay = element(by.css("modal.fade.ng-isolate-scope.login-modal-window.login-modal.leave.leave-active"));
}

module.exports = MainPage;