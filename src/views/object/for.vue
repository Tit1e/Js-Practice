<template>
<div>
  <card>
    <p>循环打印出对象中每个属性的【键名】与【键值】</p>
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
`let obj = { name: 'John', age: 5, city: 'China'}
for(var key in obj) {
  console.log(key)        // name age city
  console.log(obj[key])   // John 5 China
}`
    }
  },
}
</script>