(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.urlStatus', function (done) {
      nx.urlStatus(
        'https://s3.cn-north-1.amazonaws.com.cn/course-assets.saybot.net/coursewares/xgn2/001/001.mp3'
      ).then((res) => {
        console.log(res);
        done();
      });
    });
  });
})();
