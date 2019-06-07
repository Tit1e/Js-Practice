<template>
  <card title="目录">
    <h1>辅导小学生写作业 - -</h1>
    <div v-for="menu in menuList" :key="menu.path" class="ul-wrap">
      {{menu.name}}
      <ul>
        <router-link :to="child.path" tag="li" :key="child.path" v-for="child in menu.children">
          <el-link type="primary">{{child.name}}</el-link>
        </router-link>
      </ul>
    </div>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['menuList'])
  },
}
</script>

<style lang="scss" scoped>
.ul-wrap{
  width: 200px;
}
</style>