var HtmlReporter = require('protractor-jasmine2-screenshot-reporter'),
  oldDate = new Date(),
  date = (oldDate.getMonth()+1) + "-" + oldDate.getDate() + "-" + oldDate.getFullYear() + " " + oldDate.getHours() + "-" + oldDate.getMinutes();

exports.config = {
  framework: 'jasmine',
  baseUrl: "https://accweb.sweek.com/#",
  seleniumServerJar: "./../selenium-server-standalone-3.0.0-beta3.jar",
  // seleniumAddress: 'http://localhost:4444/wd/hub', // Comment seleniumAddress to run with Saucelabs
  chromeDriver: "./chromedriver.exe",
  directConnect: "true",

  // Suites or specs of tests
  specs: [
          'tests/titleTest.js',
          'tests/loginTest.js',
          'tests/registrationTest.js',
          'tests/changePasswordTest.js',
          'tests/addNewStoryTest.js',
          'tests/changeUsernameTest.js',
          'tests/changeEmailTest.js',
          'tests/changeLanguageTest.js',
          ],
  // suites: {
  //   titletest: "tests/titleTest.js"},
  
 //  multiCapabilities: [{
 //  'browserName': 'firefox'
	// }, {
 //  'browserName': 'chrome'
	// }],
	
	capabilities: {
    'browserName': 'chrome',

     // Run headless with PhantomJS
      // browserName: 'phantomjs',
      // Path of the binary
      // 'phantomjs.binary.path': require('phantomjs').path,
	},
  
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report
    isVerbose: true,
    includeStackTrace: true
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();

    // HTML Reporter
    jasmine.getEnv().addReporter(new HtmlReporter({
      dest: 'reports/' + date,
      filename: 'TestReport' + date + '.html'
    }));
    browser.ignoreSynchronization = true;
    EC = protractor.ExpectedConditions;
  },

  // onComplete: function() {
  //   browser.close();
  // }
}