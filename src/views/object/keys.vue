<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys()</el-link> 方法的使用
    </p>
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
`// 1. Object.keys() 返回一个所有元素为字符串的数组
console.log(Object.keys(obj)) // ["name", "age", "city"]
// 2. 循环
const arr = []
for(var key in obj) {
  // console.log(key)       // 键
  // console.log(obj[key])  // 值
  arr.push(key)
}
console.log(arr)  // ["name", "age", "city"]

`
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