<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">Array.includes()</el-link> 方法的使用
    </p>
    <p>过滤出 a 与 b 的交集</p>
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
      source:
`let a = [1, 23, 34, 5, 456, 56, 7657]
let b = [2, 34, 42, 43, 54, 456, 1]
`,
      code:
``
    }
  },
}
</script>