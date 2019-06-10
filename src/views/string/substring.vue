<template>
<div>
  <card>
    <p>写一个方法，传入 code 后返回结果为：[120000, 123400, 123456]。注意返回的数据类型。</p>
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
`let code = '123456'
// 返回 [120000, 123400, 123456]`,
      code:
``
    }
  },
}
</script>