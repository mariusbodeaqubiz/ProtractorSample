var request = require('request-promise');

module.exports = {
  getSimple: function(uri) {
    return request.get(uri);
  },
  getFull: function(uri) {
    return request.get({
      uri: uri,
      json: true,
      resolveWithFullResponse: true
    });
  },
  postFull: function(uri, body, token) {
    token = token || '';
    return request.post({
      uri: uri,
      body: body,
      json: true,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json, text/plain, */*',
          'Keep-Alive': 'timeout=5, max=100',
          
          'Cookie': 'languages=us%2Cde%2Ces%2Cfr%2Cit%2Cnl%2Cro%2Cru%2Ctr%2Cbr%2Cpl; PHPSESSID=hu14dnbs9o9rch4oifguhsp7i4; language=us; _gat=1; languages=us%2Cde%2Ces%2Cfr%2Cit%2Cnl%2Cro%2Cru%2Ctr%2Cbr%2Cpl; _ga=GA1.2.1274882978.1474270391; accessToken=' + token,
          //'Cookies': 'accessToken=' + token,
        },
      resolveWithFullResponse: true
    });
  }
}
