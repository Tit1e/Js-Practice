<template>
<div>
  <card>
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