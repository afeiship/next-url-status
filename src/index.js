(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var HEADERS = { 'User-Agent': 'node/http', 'Accept': '*/*' };

  //@thanks to: https://github.com/zrrrzzt/url-status-code/blob/master/lib/check-url-status.js

  nx.urlStatus = function (inUrl) {
    var protocol = /https/.test(inUrl) ? 'https' : 'http';
    var request = require(protocol);
    var options = new URL(inUrl);

    options.agent = false;
    options.headers = HEADERS;

    return new Promise(function (resolve) {
      request
        .get(options, function (response) {
          resolve({ code: response.statusCode });
        })
        .on('error', function (error) {
          resolve({ code: -1 });
        });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.urlStatus;
  }
})();
