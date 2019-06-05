<template>
  <el-aside width="200px">
    <el-menu :default-active="$route.path" unique-opened router>
      <menu-item v-for="(menu,index) in menuList" :menu-item="menu" />
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import menuItem from './menuItem'
export default {
  components: { menuItem },
  computed: {
    ...mapGetters(['menuList'])
  },
}
</script>