var MainPage = require("./../pages/MainPage.js");

describe("Title Tests", function() {
  afterAll(function() {
    browser.executeScript('window.sessionStorage.clear();'); //clear session
    browser.executeScript('window.localStorage.clear();'); //clear local storage
  });

  var mainPage = new MainPage();

  it("Should open the site", function() {
    browser.get(browser.baseUrl);
  });

  it("Should verify the title of the page", function() {
    expect(browser.getTitle()).toBe("Sweek");
  });
})