<template>
<div>
  <card>
    <h3>
      <el-link type="primary" target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</el-link> 方法的使用
    </h3>
    <p>处理完成后的 lists 要求达到以下效果：</p>
    <ul>
      <li>无法正确显示的字段一律赋值为【未知】</li>
      <li>新增一个【age】字段，值为每人的年龄</li>
      <li>新增一个【_sex】字段，值为【性别的中文】</li>
    </ul>
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
  { name: 'Amy', sex: '1', city: '杭州', born: null},
  { name: 'Jack', sex: '0', city: '北京', born: '2009-09-01'},
  { name: 'Penny', sex: null, city: '福州', born: ''},
  { name: 'Eric', sex: '1', city: '北京', born: '2000-01-01'},
]`,
      code:
`const result = lists.map((item)=> {
    item.sex = item.sex == null? '未知': item.sex == 0? '女' : '男'
    item._sex =  item.sex
    item.age = item.born ?new Date().getFullYear() - new Date(item.born).getFullYear() : '未知'
    return item
})

lists.forEach(ele => {
    ele.sex = ele.sex == null? '未知': ele.sex == 0? '女' : '男'
    ele._sex =  ele.sex
    ele.age = ele.born ?new Date().getFullYear() - new Date(ele.born).getFullYear() : '未知'
});

// !要求中只说了【_sex】赋值为中文，并未说将【sex】的值也覆盖
// !无法正确显示的字段一律赋值为【未知】，为什么 【born】 字段未做处理
`
    }
  },
}
</script>