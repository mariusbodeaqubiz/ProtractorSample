CONFIGURATION:
1. Git clone the project

2. Navigate to Presentation/ and run:
- npm update
- npm install

3. You need a secrets.json  file in order to be able to run all the tests. Below is the template of the file:

{
	"personalUserEmail": your personal Sweek account,
	"personalUserPassword": password of your personal Sweek account,
	"userPassword": a general password you want your test accounts to use,
	"userChangedPassword": a general password you want your test accounts to use for a change password test
}

The secret file is gitignored and it will contain personal data.

RUN TESTS:
1. Open aTerminal or Command Propmt Console
2. Run webdriver-manager update
3. Run webdriver-maneger start
4. To run tests navigate to Presentation/ director and run protractor.conf.js . All tests from conf.js specs will be run. Comment tests you do not want to run.

IMPORTANT:
Webdriver for Firefox browser has some bugs and works best with Firefox 37.0 version.