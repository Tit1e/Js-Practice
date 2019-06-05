<template>
  <div>
    <template v-if="Menu.children">
      <el-submenu :index="Menu.path">
        <template slot="title">
          <span>{{Menu.name}}</span>
        </template>
        <el-menu-item :index="menu.path" v-for="(menu,index) in Menu.children" :key="index">{{menu.name}}</el-menu-item>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :index="Menu.path">
        <span slot="title">{{Menu.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object
    }
  },
  computed: {
    Menu(){
      if(this.menuItem.children){
        if(this.menuItem.children.length > 1){
          return this.menuItem
        }else{
          return {
            ...this.menuItem.children[0],
            meta: this.menuItem.meta
          }
        }
      }else{
        return this.menuItem
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>