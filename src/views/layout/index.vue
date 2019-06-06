<template>
  <el-container>
    <menu-bar />
    <el-main>
      <el-page-header :content="$route.name"  @back="goBack"></el-page-header>
      <transition name="fade-transform"
        mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import menuBar from './components/menuBar'
export default {
  components: { menuBar },
  methods: {
    goBack(){
      history.go(-1)
    }
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-main{
  background-color: #ECF5FF;
}
.el-page-header{
  margin-bottom: 15px;
}
</style>