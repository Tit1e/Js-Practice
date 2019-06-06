<template>
<div>
  <card>
    <p>判断变量数据类型是否为数组</p>
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
`// 判断 array 是否为数组
const array = [1, 2, 3]`,
      code:
``
    }
  },
}
</script>