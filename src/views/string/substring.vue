<template>
<div>
  <card>
    <p>写一个方法，传入 code 后返回结果为：[120000, 123400, 123456]。注意返回的数据类型。</p>
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
`let code = '123456'
// 返回 [120000, 123400, 123456]`,
      code:
`function example(ele) {
  let arr = []
  for( var i = 0; i < ele.length/2; i ++){
    var str = ''
    str = ele.substr(0, 2*(i+1))

    if(str.length == 2) {
        str = str + '0000'
    }
    if(str.length == 4) {
        str = str + '00'
    }
    arr.push(str)
  }
  return arr
}
let code = '123456'
console.log(example(code))`
    }
  },
}
</script>