<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">concat</el-link> 方法的使用
    </p>
    <!-- <p>过滤出【1995-2010】（包含 1995 与 2010）期间出生的【女生】</p> -->
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
``,
      code:
``
    }
  },
}
</script>