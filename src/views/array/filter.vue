<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.filter()</el-link> 方法的使用
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
`// !包含 1995 与 2010，需求要看清

const result = lists.filter((ele) => {
  const date = new Date(ele.born).getTime();
  const star = new Date('1995').getTime()
  const end = new Date('2010').getTime()
  return (date >= star && date <= end && ele.sex == '0')
})
console.log(result)`
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