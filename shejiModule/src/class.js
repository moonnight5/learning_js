// function name(target) {
//   //原来的东西获取到
//   console.log(target)
//   target.Tname = 'lilei';
// }
function name(pName) {
  return function(target) {
    target.Tname = pName;
  }
}

@name('lilei')                       
class Man {
  
}
@name('lihuahua')
class Woman {

}
console.log(Man.Tname)
console.log(Woman.Tname)