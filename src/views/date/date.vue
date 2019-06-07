<template>
<div>
  <card>
    <p>此处要求返回格式均为：2000-01-01 或 2000-01-01 01:01:01</p>
    <ul>
      <li>获取【本月今天】的日期</li>
      <li>获取【上月今天】的日期</li>
      <li>获取【本月第一天】日期</li>
      <li>获取【上月第一天】日期</li>
      <li>获取【本月最后一天】日期</li>
      <li>获取【上月最后一天】日期</li>
      <li>获取【7天前】的日期</li>
      <li>获取【7天后】的日期</li>
      <li>获取距离现在 2456 秒后的时间（精确到时分秒）</li>
    </ul>
    <strong>上面每项都使用原生 js 与 <el-link href="https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md" target="_blank" type="primary"> dayjs</el-link> 实现一遍，注意注释清晰</strong>
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
      msg: '',
      code:
`- 原生方法
  let t = new Date()       //时间对象
  let y = t.getFullYear()  //获取年
  let m = t.getMonth() + 1 //获取当月[0-11]
  let lm = t.getMonth()    //获取上月
  let d = t.getDate()      //获取日
  let h = t.getHours()     //获取时
  let min = t.getMinutes() //获取分
  let s = t.getSeconds()   //获取秒
  let spe = '-'
  let sym = ':'
  if(m < 10 || lm< 10) {
      m = '0' + m
      lm = '0' + lm
  }
  if(d < 10) {
      d = '0' + d
  }
  // 获取【本月今天】的日期
  let today = y +  spe + m + spe + d + ' ' + h + sym + min + sym + s
  // 获取【上月今天】的日期
  let lastMonth = y +  spe + lm + spe + d + ' ' + h + sym + min + sym + s
  // 获取【本月第一天】日期
  
  // 获取【本月最后一天】日期
  // 获取【上月最后一天】日期
  // 获取【7天前】的日期
  // 获取【7天后】的日期
  // 获取距离现在 2456 秒后的时间（精确到时分秒）

- dayjs方法
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
  // 获取【7天前】的日期
  console.log(dayjs().add(7,'day').format('YYYY-MM-DD'))                             //2019-06-13
  // 获取【7天后】的日期
  console.log(dayjs().subtract(7,'day').format('YYYY-MM-DD'))                        //2019-05-30
  // 获取距离现在 2456 秒后的时间（精确到时分秒）
  const s = dayjs().valueOf() + 2456 * 1000
  console.log(dayjs(s).format('YYYY-MM-DD HH:mm:ss'))`
    }
  },
}
</script>