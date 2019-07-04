<template>
<div>
  <card>
    <strong>下面每项都使用原生 js 与 <el-link href="https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md" target="_blank" type="primary"> dayjs</el-link> 实现一遍，注意注释清晰</strong>
    <codemirror v-model="source" />
  </card>

  <card title="回答内容">
    <codemirror v-model="code" />
  </card>
</div>
</template>

<script>

export default {
  data() {
    return {
      source: '',
      code:
`// !原生方法

function formDate(t) {
  let y = t.getFullYear()  //获取年
  let m = t.getMonth() + 1 //获取当月[0-11]
  let lm = t.getMonth()    //获取上月
  let d = t.getDate()      //获取日
  let h = t.getHours()     //获取时
  let min = t.getMinutes() //获取分
  let s = t.getSeconds()   //获取秒
  let spe = '-'
  let sym = ':'
  if (m < 10 || lm < 10) {
      m = '0' + m
      lm = '0' + lm
  }
  if (d < 10) {
      d = '0' + d
  }
  if (h < 10) {
      h = '0' + h
  }
  if (min < 10) {
      min = '0' + min
  }
  if (s < 10) {
      s = '0' + s
  }
  return  y +  spe + m + spe + d + ' ' + h + sym + min + sym + s
}
// 获取【本月今天】的日期
const today = formDate(new Date())

// 获取【上月今天】的日期
const last  = new Date()
last.setMonth(new Date().getMonth() -1 )
const lastMonth = formDate(last)

// 获取【本月第一天】日期
const date = new Date()
date.setDate(1)
const firstday = formDate(date)

// 获取【上月第一天】日期
const q = new Date()
q.setDate(1)
q.setMonth(q.getMonth()-1)
const lastMonthDay = formDate(q)

// 获取【本月最后一天】日期
const x = new Date()
x.setMonth(x.getMonth()+1)
x.setDate(1)
const monthDay = formDate(new Date(x.setHours(0,0,0,0)-1) )
console.log(monthDay)

// 获取【上月最后一天】日期
const z = new Date()
z.setMonth(z.getMonth())
z.setDate(1)
const lastMonthDayOne = formDate(new Date(z.setHours(0,0,0,0)-1) )
console.log(lastMonthDayOne)

// 获取【7天前】的日期
const sevenAgo = new Date()
sevenAgo.setDate(sevenAgo.getDate() - 7)
console.log(formDate(sevenAgo))

// 时间戳
console.log(formDate(new Date(new Date().getTime() - 7 * 24 *60 *60*1000)))

// 获取【7天后】的日期
const sevenLater = new Date()
sevenLater.setDate(sevenLater.getDate() + 7)
console.log(formDate(sevenLater))

// 时间戳
console.log(formDate(new Date(new Date().getTime() + 7 * 24 *60 *60*1000)))

// 获取距离现在 2456 秒后的时间（精确到时分秒）
const time =  new Date().getTime()
console.log(formDate(new Date(time+2456*1000)))

// !dayjs方法

// 获取【本月今天】的日期
console.log(dayjs().format('YYYY年MM月DD日 HH:mm:ss'))                              //2019年06月06日

// 获取【上月今天】的日期
console.log(dayjs().subtract(1, 'months').format('YYYY-MM-DD'))                    //2019-05-06

// 获取【本月第一天】日期
console.log(dayjs().startOf('months').format('YYYY-MM-DD'))                        //2019-06-01

// 获取【上月第一天】日期
console.log(dayjs().subtract(1, 'months').startOf('months').format('YYYY-MM-DD'))  //2019-05-01

// 获取【本月最后一天】日期
console.log(dayjs().endOf('months').format('YYYY-MM-DD'))                          //2019-06-30

// 获取【上月最后一天】日期
console.log(dayjs().subtract(1, 'months').endOf('months').format('YYYY-MM-DD'))    //2019-05-31

// !7 下面两个前后是不是搞混了？

// 获取【7天前】的日期
console.log(dayjs().subtract(7,'day').format('YYYY-MM-DD'))                        //2019-05-30

// 获取【7天后】的日期
console.log(dayjs().add(7,'day').format('YYYY-MM-DD'))                             //2019-06-13

// 获取距离现在 2456 秒后的时间（精确到时分秒）
const s = dayjs().valueOf() + 2456 * 1000
console.log(dayjs(s).format('YYYY-MM-DD HH:mm:ss'))`
    }
  },
  created(){
    this.getSubject(this)
  },
  methods: {
    save(){
      this.saveSubject(this)
    }
  }
}
</script>