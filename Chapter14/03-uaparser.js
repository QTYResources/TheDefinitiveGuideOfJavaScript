/**
 * 为客户端嗅探定义 browser.name 和 browser.version，这里使用了 JQuery 1.4.1 中的代码
 * name 和 number 都是字符串，对于不同的浏览器输出的结果也是不一样的，检测结果如下：
 * 
 * "webkit": Safari 或 Chrome；版本号是 Webkit 的版本号
 * "opera": Opera；版本号就是软件的版本号
 * "mozilla"： Firefox 或者其他基于 gecko 内核的浏览器； 版本号是 Gecko 的版本号
 * "msie": IE; 版本号就是软件的版本
 * 
 * 比如 Firefox 3.6 返回：{ name: "mozilla", version: "1.9.2" }
 */
var browser = (function () {
  var s = navigator.userAgent.toLowerCase();
  var match = /(webkit)[ \/]([\w.]+)/.exec(s) ||
	 /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
	 /(msie) ([\w.]+)/.exec(s) ||
	 !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
	 [];
     return { name: match[1] || "", version: match[2] || "0" };
})