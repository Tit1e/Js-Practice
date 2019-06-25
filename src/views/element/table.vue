<template>
  <div class="table">
    <card>
      <el-table
        border
        :data="list"
        v-loading="loading"
        ref="multipleTable"
        @row-click="detail"
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
        type="selection">
        </el-table-column>
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司">
        </el-table-column>
        <el-table-column
          label="照片">
          <template slot-scope="scope">
            <img :src="scope.row.photo" height="30px">
          </template>
        </el-table-column>
        <el-table-column
          prop="attention_degree"
          label="学位">
        </el-table-column>
        <el-table-column
          label="状态">
          <!-- 数组 -->
          <!-- <template slot-scope="scope">
            <el-tag  :type="statusFilter(scope.row.status).type" >
             {{ statusFilter(scope.row.status).name}}
            </el-tag>
          </template> -->
          <!-- 三元 -->
          <!-- <template slot-scope="scope">
             <el-tag  :type="scope.row.status == true ? 'success':'danger'" >
             {{ scope.row.status == true ? '有效':'无效' }}
            </el-tag>
          </template> -->
          <!-- 对象 -->
          <template slot-scope="scope">
            <el-tag :type="statusObj[scope.row.status].type">
              {{ statusObj[scope.row.status].name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="240">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
              plain
              style="margin-right: 10px;"
              @click.stop="editList(scope.row)">编 辑</el-button>
            <el-popover
              ref="popover"
              placement="top"
              width="160"
              v-model="scope.row.visible">
              <p>确定要删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="deleteList(scope.row)">确定</el-button>
              </div>
              <el-button
                type="danger"
                size="mini"
                slot="reference"
                :disabled="!scope.row.status"
                @click.stop="() => {}"
                >删 除</el-button>
            </el-popover>
          </template>
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

    <el-dialog
      :title="title"
      center
      :visible.sync="dialogVisible"
      width="30%">
      <el-form inline label-width="100px">
        <el-form-item label="标题：">
          <el-input :disabled = "flag" v-model="form.title"></el-input>
        </el-form-item>
         <el-form-item label="公司：">
          <el-input :disabled = "flag" v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="照片：" width="100%">
         <el-input :disabled = "flag" v-model="form.photo"></el-input>
         <img :src="form.photo">
        </el-form-item>
        <el-form-item label="学位：">
          <el-input :disabled = "flag" v-model="form.attention_degree"></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-radio v-model="form.status" :label="true" :disabled="flag">有 效</el-radio>
          <el-radio v-model="form.status" :label="false" :disabled="flag">无 效</el-radio>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" v-if="!flag">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

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
      flag:false,
      statusTags: [
        {
          name: '有效',
          label: true,
          type: 'success'
        },
        {
          name: '无效',
          label: false,
          type: 'danger'
        },
      ],
      statusObj: {
        'true': {
          type: 'success',
          name: '有效'
        },
        'false': {
          type: 'warning',
          name: '无效'
        }
      },
      dialogVisible: false,
      form: {},
      radio: true,
      title: '',
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
          this.lists.forEach(element => {
            element.visible = false
          });
          console.log(this.lists)
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
    },
    statusFilter(a) {
     return this.statusTags.filter((el) => {
        return   el.label ===  a
      })
    },
    deleteList(row) {
      this.list.map((i,index) => {
       if (row.id === i.id) {
         this.list.splice(index,1)
       }
      })
    },
    editList(row) {
      this.flag = false
      this.title = '编辑信息'
      this.dialogVisible =  true
      let copyRow = {...row}
      this.form = copyRow
    },
    submit(){
      this.list.map((i,index) => {
        if (this.form.id === i.id) {
          this.list.splice(index,1,this.form)
        }
      })
    this.dialogVisible = false
    },
    detail(row) {
      this.flag = true
      this.title = '详细信息'
      this.dialogVisible =  true
      this.form = row
    },
    handleSelectionChange(val) {
    },
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
a {
  text-decoration: none;
}
</style>
