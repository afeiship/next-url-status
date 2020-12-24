/*!
 * name: @jswork/next-url-status
 * description: Detect url status code for next.
 * homepage: https://github.com/afeiship/next-url-status
 * version: 1.0.0
 * date: 2020-12-24 15:32:14
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var HEADERS = { 'User-Agent': 'node/http', 'Accept': '*/*' };

  nx.urlStatus = function (inUrl) {
    var protocol = /https/.test(inUrl) ? 'https' : 'http';
    var request = require(protocol);
    var options = new URL(inUrl);

    options.agent = false;
    options.headers = HEADERS;

    return new Promise(function (resolve) {
      request
        .get(options, function (response) {
          resolve({ code: 0, data: response.statusCode });
        })
        .on('error', function (error) {
          resolve({ code: 1, data: -1 });
        });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.urlStatus;
  }
})();
