<template>
<div>
  <card>
    <p>数组的结构赋值，使用简化或还原下面过程</p>
    <codemirror v-model="source" />
  </card>

  <card title="回答内容">
    <codemirror v-model="code" />
  </card>

  <card title="整理复习">
    <p>● es6 数组解构赋值 和 变量声明</p>
    <mavon-editor v-model="review" />
  </card>
</div>
</template>

<script>
export default {
  data() {
    return {
      source:
`// 简化下面的赋值过程
let a = 1
let b = 2
let c = 3

// 将下面数组拆分成两个组：a = [1]，b = [2, 3, 4]
const array = [1, 2, 3, 4]`,
      code:
`let [a, b, c] = [1, 2, 3]
let [a, ...b] = [1,2,3,4]`,
      review:
``
    }
  },
}
</script>