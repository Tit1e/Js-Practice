<template>
<div>
  <card>
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
      source: '',
      code:
`for(var key in a) {
  b[key] == ''? b[key] = a[key] : ''
}
console.log(b) //{name: "John", city: "China", born: "1994-01-01"}

// 直接循环 b
for(let key in b) {
  b[key] = a[key]
}`
    }
  },
  created(){
    this.getSubject(this)
  },
  methods: {
    save(){
      this.saveSubject(this)
    }
  }
}
</script>