<template>
<div>
  <card>
    <codemirror v-model="source" />
  </card>

  <card title="回答内容">
    <codemirror v-model="code" />
  </card>

  <card title="整理复习">
    <li> es6 数组解构赋值 和 变量声明</li>
    <mavon-editor v-model="review" />
  </card>
</div>
</template>

<script>
export default {
  data() {
    return {
      source: '',
      code:
`let [a, b, c] = [1, 2, 3]
let [a, ...b] = [1,2,3,4]`,
      review:
``
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