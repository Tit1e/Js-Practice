<template>
  <el-aside width="200px">
    <img src="@/assets/logo.svg" class="logo">
    <div class="title">JavaScript 练习</div>
    <el-menu class="_menu" :default-active="$route.path"
      text-color="#2c3e50"
      unique-opened
      router>
      <menu-item v-for="(menu,index) in menuList"
        :menu-item="menu" />
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

<style>
.logo{
  width: 100px;
  height: 100px;
  display: block;
  margin: 10px auto;
}
.title{
  text-align: center;
}
.el-aside{
  background-color: #fff;
  box-shadow: 2px 0 10px rgba(0,0,0,.2);
  z-index: 9;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
._menu{
  border-right: none !important;
}
</style>