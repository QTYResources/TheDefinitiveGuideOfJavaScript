/*
 * 安排函数 f() 在未来的调用模式
 * 在等待了若干毫秒之后调用 f()
 * 如果设置了 interval 并没有设置 end 参数，则对 f() 调用将不会停止
 * 如果没有设置 interval 和 end，只在若干毫秒后调用 f() 一次
 * 只有指定了 f()，才会从 start=0 的时刻开始
 * 注意，调用 invoke() 不会阻塞，它会立即返回
*/
function invoke(f, start, interval, end) {
  if (!start) start = 0 // 默认设置为 0 毫秒
  if (arguments.length <= 2) {  // 单次调用模式
    setTimeout(f, start)  // 若干毫秒后的单次调用模式
  } else {
    setTimeout(repeat, start) // 在若干毫秒后调用 repeat()
    function repeat() { // 在上一行所示的 setTimeout() 中调用
      var h = setInterval(f, interval)  // 循环调用 f()
      // 在 end 毫秒后停止调用，前提是 end 已经定义了
      if (end) {
        setTimeout(function () {
          clearInterval(h)
        }, end)
      }
    }
  }
}