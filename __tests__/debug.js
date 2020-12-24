require('../src');

nx.urlStatus(
  'https://s3.cn-north-1.amazonaws.com.cn/course-assets.saybot.net/coursewares/xgn2/001/001.mp3'
).then((res) => {
  console.log(res);
});
