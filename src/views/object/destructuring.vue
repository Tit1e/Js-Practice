<template>
<div>
  <card>
    <p>使用对象解构赋值的方式简化下面过程</p>
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
`let obj = { name: 'John', age: 5}

let name = obj.name
let _age = obj.age
`,
      code:
``
    }
  },
}
</script>