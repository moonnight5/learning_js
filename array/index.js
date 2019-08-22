// -------------------------------------------------------------------------数组的创建
// var arr = [];
// var arr = new Array()    // 创建数组

// var arr = new Array(5)
// arr = [undefined,undefined,undefined,undefined,undefined]  //创建一个长度为5的数组

// var arr = new Array(1,2,3,4,5)
// arr = [1,2,3,4,5]   

// var arr = Array.of(7)
// arr = [7]                   // es6 

// ------------------------------------------------------------------------判断是否为数组
// var arr = []
// if (arr instanceof Array) {}
// if (Array.isArray(arr)) {}
// if (Object.prototype.toString.call(arr) == '[object Array]') {}
// if (arr.constructor === Array) {
//   console.log(1)
// }
// console.log(arr.constructor)

// ---------------------------------------------------------------------------数组方法
// var arr = [1,2,3,4,5]
// arr.shift()
// arr.unshift()
// arr.push()
// arr.pop()

// Array.from()
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
// let arr = []
// for (let n in arrayLike) {
//   arr.push(arrayLike[n])
// }
// console.log(arr)
let str = '123'
let newArray = Array.from(arrayLike)
let newArray2 = Array.from(arrayLike, (v) => v + '1')
let newArray3 = Array.from(str)
// console.log(newArray)       // [ 'a', 'b', 'c' ]
// console.log(newArray2)      // [ 'a1', 'b1', 'c1' ]
// console.log(newArray3)

// ----------------------------------------------------------------------数组转换成其他类型
// var arr = [1,2,3,4,5]
// var newarr = arr.join('\\')
// console.log(newarr)    // 1\2\3\4\5
// var newarr2 = arr.join('')
// console.log(newarr2)    // 12345

// var arr = [2,4,3,5,1]
// arr.sort((a,b) => a - b)
// var newarr = arr.slice(0,2)
// console.log(newarr)
// let test = arr.splice(0,0,6,7)
// console.log(test)
// console.log(arr)

// copyWithin(target,start,n)      // target:复制到哪个位置  start：从哪开始复制   n: 复制个数
// var arr = [ 1, 2, 3, 4, 5 ]
// arr.copyWithin(0,3)
// arr.fill(9,0,2)    // [ 9, 9, 3, 4, 5 ]
// console.log(arr)

// indexof()
// lastindexof()
// includes()
var arr = [ 1, 2, 3, 4, 5 ]
arr.find((v) => v < 3)
console.log(arr.find((v) => v < 3))   // 1







