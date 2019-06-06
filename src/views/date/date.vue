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
`- 获取【本月今天】的日期
    var date = new Date()           // 获取时间对象
    var year = date.getFullYear();  // 获取年
    var month = date.getMonth() + 1;// 获取月(0-11)
    var day = date.getDate();       // 获取日
    var h = date.getHours();        // 获取时
    var m = date.getMinutes();      // 获取分
    var s = date.getSeconds();      // 获取秒
    if(day < 10 && day > 0) {
      month = '0' + month;
    }
    if(day < 10) {
      day = '0' + day
    }
    if(h < 10) {
      h = '0' + h
    }
    if(m < 10) {
      m =  '0' + m
    }
    if(s < 10) {
      s = '0' + s
    }
    var nowDate = year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s
- 获取【上月今天】的日期
    var date = new Date()           // 获取时间对象
    var year = date.getFullYear();  // 获取年
    var month = date.getMonth();    // 获取月(0-11)
    var day = date.getDate();       // 获取日

    if(day < 10) {
      month = '0' + month;
    }
    if(day < 10) {
      day = '0' + day
    }
    var nowDate = year + "-" + month + "-" + day
- 获取【本月第一天】日期
    var date = new Date();
    date.setDate(1);                //根据本地时间为指定的日期对象设置月份中的第几天
    console.log(date.setDate(1))
    var month = date.getMonth()+1;
    var day = date.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    console.log(date.getFullYear() + '-' + month + '-' + day)
- 获取【上月第一天】日期
    var date = new Date();
    date.setDate(1); //1559373960798
    console.log(date.setDate(1))
    var month = date.getMonth();
    var day = date.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    console.log(date.getFullYear() + '-' + month + '-' + day)
- 获取【本月最后一天】日期
- 获取【上月最后一天】日期
- 获取【7天前】的日期
- 获取【7天后】的日期
- 获取距离现在 2456 秒后的时间（精确到时分秒）

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
  // 获取距离现在 2456 秒后的时间（精确到时分秒）`
    }
  },
}
</script>