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
      code:
``
    }
  },
}
</script>