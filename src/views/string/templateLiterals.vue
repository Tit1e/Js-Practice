<template>
<div>
  <card>
    <p>使用模版字符串将 a、b、c 拼接成 www.google.com</p>
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
`let a = 'www'
let b = 'google'
let c = 'com'`,
      code:
``
    }
  },
}
</script>