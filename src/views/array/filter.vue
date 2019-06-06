<template>
<div>
  <card>
    <p>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter</el-link> 方法的使用
    </p>
    <p>过滤出【1995-2010】（包含 1995 与 2010）期间出生的【女生】</p>
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
`// sex: 0 女生，1 男生
const lists = [
  { name: 'John', sex: '0', city: '上海', born: '1994-01-01'},
  { name: 'Amy', sex: '1', city: '杭州' born: '2011-03-17'},
  { name: 'Jack', sex: '1', city: '北京' born: '2009-09-01'},
  { name: 'Penny', sex: '0', city: '福州' born: '1995-11-09'},
  { name: 'Eric', sex: '1', city: '北京' born: '2000-01-01'},
]`,
      code:
`const result = lists.filter((ele) => {
  const date = new Date(ele.born).getTime();
  const star = new Date('1995').getTime()
  const end = new Date('2010').getTime()
  return (date > star && date < end && ele.sex == '0')
})
console.log(result)`
    }
  },
}
</script>