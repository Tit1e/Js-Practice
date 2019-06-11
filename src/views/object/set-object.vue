<template>
<div>
  <card>
    <p>将 a 中的值赋给 b 中对应的属性，要求程序执行完成后 b 的值同 c</p>
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
`let a = { name: 'John', age: 5, city: 'China', born: '1994-01-01', state: 1 }
let b = { name: '', city: '', born: '' }

let c = { name: 'John', city: 'China', born: '1994-01-01' }
`,
      code:
`for(var key in a) {
  b[key] == ''? b[key] = a[key] : ''
}
console.log(b) //{name: "John", city: "China", born: "1994-01-01"}`
    }
  },
}
</script>