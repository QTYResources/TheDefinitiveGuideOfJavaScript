// 异步载入并执行一个指定 URL 中的脚本
function loadasync(url) {
  var head = document.getElementsByTagName("head")[0] // 找到 <head> 元素
  var s = document.createElement("script")      // 创建一个 <script> 元素
  s.src = url   // 设置其 src 属性
  head.appendChild(s)     // 将 script 元素插入 head 标签中
}