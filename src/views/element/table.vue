<template>
<div>
  <card title="要求">
    <ul>
      <li>根据接口文档 <strong>ApiDocument.pdf</strong> 中的 【人员管理】部分的接口实现人员的管理功能</li>
    </ul>
  </card>
  <card title="回答内容">
    <div class="tableHeader">
      <h3>列 表</h3>
      <el-button type="primary" @click="addList()">添 加</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column type="index" label="#" width="60"></el-table-column>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="admin" label="isadmin">{{tableData.admin}}</el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
        <el-tag type="success">{{scope.row.status == 1? '有效' : '无效'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" width="180">
        <template slot-scope="scope">
          {{scope.row.create_time}}
        </template>
      </el-table-column>
      <el-table-column  label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" @click="editList(scope.row)" class="cyan"><i class="el-icon-edit"></i>编 辑</el-button>
          <el-button type="text" @click="deleteList(scope.row)" class="red"><i class="el-icon-delete"></i>删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="验证密码">
          <el-input v-model="form.checkPassword"></el-input>
        </el-form-item>
        <el-form-item label="是否为管理员">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="0">否</el-radio>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </card>
</div>
</template>

<script>

export default {
  data() {
    return {
      tableData:[],
      form: {
        name: '',
        password: '',
        checkPassword: '',
      },
      radio: '1',
      title: '',
      dialogVisible: false,
      currentPage: 4
    }
  },
  created(){
    this.getList()
  },
  methods: {
    getList() {
      axios.post('http://129.204.79.16:3000/api/user/query',{admin: 0})
      .then((res) => {
        this.tableData = res.data.data.list
      })
      .catch((res) => {

      })
    },
    addList() {
      this.dialogVisible = true
      this.title = '添加人员'
    },
    editList() {
      this.dialogVisible = true
      this.title = '编辑人员'
    },
    submit() {
      if(this.title == '添加人员'){
        const data = this.form
        axios.post('http://129.204.79.16:3000/api/user/add',data)
        .then((res) => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.dialogVisible = false
          }
        })
        .catch((res) => {

        })
      } else {

      }
    },
    deleteList(row) {
      console.log(row)
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.red{
  color: #F56C6C;
}
.cyan{
  color: 	#00CED1;
}
.tableHeader{
  padding: 0px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3{
    margin: 0;
    padding: 0;
  }
}
</style>
