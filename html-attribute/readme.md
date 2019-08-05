https://camo.githubusercontent.com/07920d807d24f5573f2ced24f06232319bf6ba21/68747470733a2f2f6d656e677a68616f666c792e6769746875622e696f2f626c6f672f7374617469632f696d6167652f7363726970742d6173796e632d64656665722e706e67
## script(下载，执行)
1. async 
  1. html parse  / 下载 并行
  2. 下载完就执行，顺序无法控制
2. defer
  1. html parse  / 下载 并行
  2. 整个文档加载完成之后 按照script在文档中出现的顺序执行
3. 没有属性
  1. html parse 和 js 下载 执行 都是互斥的


## crossorigin
用于 可以引入跨域资源的标签：img link script
crossorigin 代表要协商跨域
后端没设置 Access-control-* 就会出错
1. anonymous
  如果使用这个值，会在请求头中加一个 origin 属性，
  如果未设置 cros ，跨域 js 发生了错误，将会向window.onerror 提供少的信息，通过crossorigin 属性，得到详细的信息
2. use-credentials
  请求的时候带上 cookie 等用户验证信息