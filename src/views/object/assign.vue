<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign()</el-link> 方法的使用
    </p>
    <p>浅拷贝一个对象（多种方法）</p>
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
`let obj = { name: 'John', age: 5, city: 'China'}`,
      code:
``
    }
  },
}
</script>