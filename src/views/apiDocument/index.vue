<template>
  <card title="API 文档">
    <div class="markdown-body">
      <markdown />
    </div>
  </card>
</template>

<script>
import markdown from '@/assets/ApiDocument.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
export default {
  components: {
    markdown
  },
}
</script>

<style lang="scss" scoped>
</style>