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
`const str = string.split('.')
console.log(str)  //["www", "google", "com"]
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