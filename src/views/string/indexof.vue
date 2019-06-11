<template>
<div>
  <card>
    <p>判断 str 是否在 string 中，如果在，在什么位置</p>
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
`let string = 'www.google.com'
let str = 'g'`,
      code:
`for(var i = 0; i < string.length; i++){
  if(string[i] !== -1) {
    var one = string.indexOf(str)
    var two = string.indexOf(str, one+1);
  }
}
console.log(one)  // 4
console.log(two)  // 7

`
    }
  },
}
</script>