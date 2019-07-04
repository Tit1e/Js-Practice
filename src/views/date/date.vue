<template>
<div>
  <card>
    <strong>下面每项都使用原生 js 与 <el-link href="https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md" target="_blank" type="primary"> dayjs</el-link> 实现一遍，注意注释清晰</strong>
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
      code: '',
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