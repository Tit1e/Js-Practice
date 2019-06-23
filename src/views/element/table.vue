<template>
  <div class="table">
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      lists: []
    }
  },
  created(){
  },
  methods: {
  }
}
// !要求一
/**
 * 请求方式: get
 * 接口地址: /api/data
 * 要求：将获取到的数据中的每个字段在用 el-table 展示
 */
// !要求二
/**
 * 接口中新增 status 字段，类型为 Boolean，true: 有效，false: 无效
 * 要求：
 * 1、表格末尾新增一列，表头为“状态”，中文显示每条数据的状态，使用 el-tag
 * 2、表格末尾新增一列，表头为“操作”，操作有【删除】按钮，只有 “有效” 状态下的对象可以进行删除操作，本地模拟删除，根据 id 进行删除
 * 3、点击“行”可以查看点击行的数据详情，使用 el- dialog，图片需要展示
 * !补充：
 * 1、删除需要确认，使用 el-popover 组件进行确认，点击删除时不能出现详情弹窗
 * 2、删去弹窗中的按钮，弹窗标题居中
 * 3、将列表中的图片以图片形式展示
 */
// !要求三
/**
 * 1、操作列新增【编辑】按钮
 * 2、点击编辑出现弹窗，数据中的每项都可进行编辑，点击保存列表中的数据更新
 * 3、状态使用 el-radio 组件
 */
</script>

<style lang="scss" scoped>
</style>
