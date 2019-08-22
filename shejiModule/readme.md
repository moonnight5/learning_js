## 哪几种设计模式
1. 发布订阅
    onClick() 
    addEventListener()

    Event-bus
    <!-- 订阅 -->
    event.on('click');
    event.on('receiveData');
    <!-- 发布 -->
    event.emit('click')

2. 单例模式
    只存在一个实例
    应用场景：弹窗

3. 装饰者模式
  1. 动态增加功能， 无侵入的（不破坏原来的代码）
  2. 优点，没有装饰 可以用，有了装饰者 会更好用
  实现流程：
  1. 目的：功能增强
  2. 把原来的方法取到
  3. 定义一个新的方法，新的方法里面包含原来的方法，不改变原来的代码

  es7
  decorator  @
  装饰：
  1. 类
  2. 方法
  3. 属性


## babel
负责编译
怎么编译，全靠babel的插件
const -> var 
Promise -> callback
Array.isArray -> es5 ...
想把 es6 -> es5

presets: 一堆插件的集合
preset-env 功能就是 es6 -> es5，集合了很多插件。
    