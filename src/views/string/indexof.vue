<template>
<div>
  <card>
    <p>判断 str 是否在 string 中，如果在，在什么位置</p>
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
`let string = 'www.google.com'
let str = 'g'`,
      code:
``
    }
  },
}
</script>