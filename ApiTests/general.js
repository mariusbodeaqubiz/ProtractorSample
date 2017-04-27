var expect = require("chai").expect;

module.exports = {
  connectionSpec: function(response, expectedStatus) {
    expect(response.statusCode).to.equal(expectedStatus);
  }
}
