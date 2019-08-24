function log (target,name,descriptor) {
  // console.log(target,name,descriptor);
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log('add被调用了')
    return originalMethod(...args);
  }
}

// function Operation() {}
// Operation.prototype = {}
// defineProperty(Operation.prototype,add,{})
class Operation {
  @log
  add (a,b) {
    // console.log('add被调用了')
    return a + b;
  }
}

const opt = new Operation()
console.log('opt',opt.add(1,2))

// let obj = {}
// Object.defineProperty(obj,'add',{
//   value: function(a,b) {
//     return a + b
//   }
// })
// console.log(obj.add(3,4))