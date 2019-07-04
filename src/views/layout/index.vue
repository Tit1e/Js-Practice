<template>
  <el-container class="right-content">
    <menu-bar />
    <el-main>
      <div class="top-header">
        <el-page-header  @back="goBack">
          <div slot="content">
            {{$route.name}}
            <img src="@/assets/save.svg" class="save" @click="save" v-if="$route.meta.showSave">
          </div>
        </el-page-header>
      </div>
      <div class="content-wrap">
        <transition name="fade-transform"
          mode="out-in">
          <keep-alive>
            <router-view ref="currentPage"/>
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
    save(){
      this.$refs.currentPage.save()
    },
    goBack(){
      history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.right-content{
  height: 100vh;
  .el-main{
    background-color: #ECF5FF;
    .top-header{
      position: fixed;
      padding: 20px;
      top: 0;
      left: 200px;
      right: 0;
      z-index: 9;
      background-color: #ECF5FF;
      box-shadow: 12px 0 10px rgba(0,0,0,.2);
    }
    .content-wrap{
      margin-top: 60px;
    }
  }
  .save{
    height: 21px;
    float: right;
    margin-left: 10px;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
    &:active{
      
      filter:brightness(0.5);
    }
  }
}

</style>