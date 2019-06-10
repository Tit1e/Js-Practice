<template>
<div>
  <card>
    <p>根据【.】打断 string，返回一个打断后的数组</p>
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
`let string = 'www.google.com'`,
      code:
``
    }
  },
}
</script>