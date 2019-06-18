<template>
  <div class="table">
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      lists: []
    }
  },
  created(){
  },
  methods: {
  }
}
/**
 * 请求方式: get
 * 接口地址: /api/data
 * 要求：将获取到的数据中的每个字段在用 el-table 展示
 */
</script>

<style lang="scss" scoped>
</style>
