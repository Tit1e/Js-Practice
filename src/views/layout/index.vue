<template>
  <el-container class="right-content">
    <menu-bar />
    <el-main>
      <div class="top-header">
        <el-page-header  @back="goBack">
          <div slot="content">
            {{$route.name}}
            <el-link type="primary" class="el-icon-s-claim" :underline="false"></el-link>
          </div>
        </el-page-header>
      </div>
      <div class="content-wrap">
        <transition name="fade-transform"
          mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
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
.right-content .top-header{
  position: fixed;
  padding: 20px;
  top: 0;
  left: 200px;
  right: 0;
  z-index: 9;
  background-color: #ECF5FF;
  box-shadow: 12px 0 10px rgba(0,0,0,.2);
}
.right-content .content-wrap{
  margin-top: 60px;
}
</style>