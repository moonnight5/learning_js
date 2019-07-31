1. 三个容器
  背后 100% 宽度
  拖拽的圆点
  已经拖拽的进度条
2. touchStart touchMove touchEnd
3. 改变width 和 left


```js
  new Progress('selector',{
    onDrag: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
    progress: 0.5,
    disableDrag: false
  })
```
