<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign()</el-link> 方法的使用
    </p>
    <p>浅拷贝一个对象（多种方法）</p>
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
`// 方法1
const obj1 = Object.assign(obj)
console.log(obj1)  //{name: "John", age: 5, city: "China"}

// 方法2
let obj1 = {}
for(var key in obj) {
    obj1[key] = obj[key]
}
console.log(obj1)  //{name: "John", age: 5, city: "China"}

//方法3
let copyObj = {...obj}
console.log(copyObj) //{name: "John", age: 5, city: "China"}`
    }
  },
}
</script>