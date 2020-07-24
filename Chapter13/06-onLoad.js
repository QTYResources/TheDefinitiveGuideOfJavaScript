// 注册函数 f，当文档载入完成时执行这个函数 f
// 如果文档已经载入完成，尽快以异步方式执行它
function onLoad(f) {
  if (onLoad.loaded) {  // 如果文档已经载入完成
    window.setTimeout(f, 0)
  } else if (window.addEventListener) { // 将 f 放入异步队列，并尽快执行它
    window.addEventListener("load", f, false)
  } else if (window.attachEvent) {  // IE8 以及更早的 IE 版本浏览器注册事件的方法
    window.attachEvent("onload", f)
  }
  // 给 onLoad 设置一个标志，用来指示文档是否载入完成
  onLoad.loaded = false
  // 注册一个函数，当文档载入完成时设置这个标志
  onLoad(function() { onLoad.loaded = true } )
}