<template>
  <el-container>
    <menu-bar/>
    <el-container>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menuBar from './components/menuBar'
export default {
  components: { menuBar }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
</style>