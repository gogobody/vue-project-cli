let utils = {}
// 判断浏览器
utils.checkBrowser = () => {
const userAgent = window.navigator.userAgent.toLowerCase()
if (userAgent.match(/Alipay/i) == 'alipay') {
  // 支付宝
  // console.log('zfb');
  return 'zfb';
} else if (userAgent.match(/MicroMessenger/i) == 'micromessenger') {
  // 微信公众号
  // console.log('wx');
  return 'wx';
} else {
  // 其他浏览器
  // console.log('other');
  return null;
}
}

// 时间戳转h和m
utils.timestampToHourMin = (time) => {
let dd = parseInt(time / 1000 / 60 / 60 / 24, 10) // 计算剩余的天数
let ddTohh = dd * 24 // 天数换小时数
let hh = ddTohh + parseInt((time / 1000 / 60 / 60) % 24, 10) // 计算剩余的小时数
let mm = parseInt((time / 1000 / 60) % 60, 10)
if (hh === 0) {
  return mm + 'm'
}
return hh + 'h' + mm + 'm'
}

// h，m转换成s
utils.ToSecond = (hour, minute, second) => {
return hour * 60 * 60 + minute * 60 + second
}

// 小数转分数
utils.toPercent = (point) => {
var str = 100 - parseInt(point * 100)
return str
}

// 时间/数字补0
utils.checkTime = (i) => {
if (i < 10) {
  i = '0' + i
}
return i
}

// 日期转时间戳毫秒
utils.DateToSecond = (date) => {
// console.log(date)
if (typeof date === 'string') {
  date = new Date(Date.parse(date.replace(/-/g, "/")))
}
if (date === null) {
  return 0
}
return date.getTime()
}

// 判断手机系统
utils.checkPhone = () => {
var userAgent = window.navigator.userAgent
if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1) {
  return 'Android' // android终端
}
if (!!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
  return 'Ios' // ios终端
}
}

// 时间戳转日期
utils.SecondToDate = (timestamp) => {
var time = new Date(timestamp)
var y = time.getFullYear()
var m = time.getMonth() + 1
var d = time.getDate()
var h = time.getHours()
var mm = time.getMinutes()
var s = time.getSeconds()
return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
}

// 取url参数(单页应用可能有错误)
utils.GetQueryString = (name) => {
const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
const r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]);
return null;
};

// 比较日期大小(-分隔)
utils.CompareDate = (d1, d2) => {
// console.log(d1)
if ((new Date(d1.replace(/-/g, "\/"))) > (new Date(d2.replace(/-/g, "\/")))) {
  return d1
} else {
  return d2
}
}

// 小数向上取整
utils.ToInt = (data) => {
return Math.ceil(data)
}

// sleep延时函数
utils.sleep = (time) => {
return new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, time);
});
};

// 生成随机字符串（字母数字）
utils.randomStr = () => {
let text = '';
const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 8; i++) {
  text += possible.charAt(Math.floor(Math.random() * possible.length));
}
return text;
};

export default utils;
