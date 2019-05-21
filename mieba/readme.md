- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- MVVM 不需要DOM 因为DOM很低效
  但是要找元素怎么办？ ref属性相当于id
- 数组
  Math.random() 0-1  <0.5
     this.heroHidedIds = this.heroes
              .slice(0)
              .sort(() => 0.5 - Math.random())
              .slice(0, Math.ceil(this.heroes.length / 2))
              .map(hero => hero.id)

- 组件思想
  Vue.component('Heroes', {
    props: {
      参数：参数的约束
    },
    template: `
    `
  })
  组件化思维
  <Heroes 
  :heroer = "heroes"/>

  小程序   src="{{item,src}}"
  vue     :src="item.src"
  props
  ref="allAudio"  this.$refs.allAudio
  wx:for   v-for