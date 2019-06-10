<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">concat</el-link> 方法的使用
    </p>
    <p>合并 a 与 b 数组（多种方法）</p>
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
`let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
`,
      code:
``
    }
  },
}
</script>