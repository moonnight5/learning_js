function MyPromise (callback) {
  var self = this
  // 记录状态null为pending，true为resolve,false为reject
  var state = null
  // 记录resolve的参数
  var param = null
  // then方法返回的promise对象的resolve和reject
  var nextResolve = null
  var nextReject = null
  // 记录then方法的参数，onFullfilled和onReject
  var asynconFulfilled = null
  var asynconReject = null

  // 执行并改变promise对象的状态
  callback(resolve,reject)

  // then方法
  this.then = function (onFulfilled,onReject) {
    // 返回一个新的promise对象
    return new self.constructor(function(resolve,reject) {
      // 判断异步代码是否执行完毕(是否resolve或者reject)
      // 若执行完毕，就在then方法里面立即执行，否则就将参数记录下来，等待state就绪再执行*****函数
      if (state === true) {
        doAsynconFullfilled(onFulfilled,resolve,reject)
      } else if (state === false) {
        doAsynconRejected(onReject,resolve)
      } else {
        nextResolve = resolve
        nextReject = reject
        asynconFulfilled = onFulfilled
        asynconReject = onReject
      }
    })
  }

  // resolve方法
  function resolve(data) {
    state = true
    param = data
    if (nextResolve) {
      doAsynconFullfilled(asynconFulfilled,nextResolve,nextReject)
    }
  }
  // reject方法
  function reject(err) {
    state = false
    param = err
    if (nextResolve) {
      doAsynconRejected(asynconReject,nextResolve,nextReject)
    }
  }
}