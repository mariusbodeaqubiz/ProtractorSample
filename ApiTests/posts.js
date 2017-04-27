var expect = require("chai").expect;

module.exports = {
  listSpec: function(response) {
    expect(response).to.be.a('array');
  }
}
