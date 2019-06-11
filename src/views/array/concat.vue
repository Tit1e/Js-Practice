<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">concat</el-link> 方法的使用
    </p>
    <p>合并 a 与 b 数组（多种方法）</p>
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
`let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
`,
      code:
`// 方法1 concat
let c = a.concat(b)
console.log(c)  //[1, 2, 3, 4, 5, 6, 7, 8]

// 方法2 循环
for(var i in b){
  a.push(b[i]);
}
console.log(a)   //[1, 2, 3, 4, 5, 6, 7, 8]

// 方法3 array.push.apply()
a.push.apply(a, b);
console.log(a) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(b) // [5, 6, 7, 8]
`
    }
  },
}
</script>