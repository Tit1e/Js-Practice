<template>
  <el-card shadow="never">
    <div slot="header">
      <span>{{title}}</span>
    </div>
    <slot />
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '说明'
    }
  }
}
</script>