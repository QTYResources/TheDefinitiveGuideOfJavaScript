/**
 * 这个函数用来解析来自 URL 的查询串中的 name=value 参数对
 * 它将 name=value 对存储在一个对象的属性中，并返回该对象
 * 这样来使用它
 * 
 * var args = urlArgs() // 从 URL 中解析参数
 * var q = args.q || "" // 如果参数定义了的话就使用参数；否则使用一个参数默认值
 * var n = args.n ? parseInt(args.n) : 10
 */
function urlArgs() {
  var args = {}   // 定义一个空对象
  var query = location.search.substring(1)  // 查找到查询串，并去掉 '?'
  var pairs = query.split("&")  // 根据 “&” 符号将查询字符串分割开
  for (var i = 0; i < pairs.length; i++) {  // 对于每个片段
    var pos = pairs[i].indexOf('=') // 查找 "name=value"
    if (pos == -1) continue // 如果没有找到的话，就跳过
    var name = pairs[i].substring(0, pos) // 提取 name
    var value = pairs[i].substring(pos + 1) // 提取 value
    value = decodeURIComponent(value) // 对 value 进行解码
    args[name] = value  // 存储为属性
  }
  return args // 返回解析后的参数
}