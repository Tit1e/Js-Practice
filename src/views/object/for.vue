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
`let obj = { name: 'John', age: 5, city: 'China'}
for(var key in obj) {
  console.log(key)        // name age city
  console.log(obj[key])   // John 5 China
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