<template>
  <div class="table">
    <card>
      <el-table
        border
        :data="list"
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司"
          width="180">
        </el-table-column>
        <el-table-column
          label="照片">
          <template slot-scope="scope">
            <a :href="scope.row.photo">{{ scope.row.photo }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="attention_degree"
          label="学位">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20,30]"
        :page-size="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.lists.length">
      </el-pagination>
    </card>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      lists: [],
      list: [],
      loading: false,
      currentPage: 1,
      pageSizes: 10,
    }
  },
  created(){
    this.getList()
  },
  mounted() {
  },
  methods: {
    getList() {
      this.loading = true
      axios.get('/api/data')
      .then((res) => {
        if(res.data.code === 200){
          this.lists = res.data.data
          this.loading = false
          this.init()
        }
      })
      .catch((res) => {
        console.log(error);
      })
    },
    init(){
     this.list =  this.lists.filter((ele, index) => {
        if(index >= (this.currentPage - 1) *  this.pageSizes && index < this.currentPage * this.pageSizes) {
          return  ele
        }
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);this
      this.pageSizes = val
      this.init()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.init()
    }
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
 */
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
