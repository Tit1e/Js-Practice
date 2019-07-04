<template>
<div>
  <card>
    <h3>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.map()</el-link> 方法的使用
    </h3>
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
`const result = lists.map((item)=> {
    item.sex = item.sex == null ? '未知' : item.sex
    item.age = item.born? new Date().getFullYear() - new Date(item.born).getFullYear() : '未知'
    item.born = !item.born ? '未知' : item.born
    item._sex = item.sex == '未知'? '未知' : item.sex == 0 ? '女生' : '男生'
    return item
})
console.log(result)

// !要求中只说了【_sex】赋值为中文，并未说将【sex】的值也覆盖
// !无法正确显示的字段一律赋值为【未知】，为什么 【born】 字段未做处理
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