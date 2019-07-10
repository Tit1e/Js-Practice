<template>
<div>
  <card title="要求">
    <ul>
      <li>根据 <router-link to="/apiDocument">API 文档</router-link> 中的 【人员管理】部分的接口实现人员的管理功能</li>
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
      @row-click="detail"
      style="width: 100%">
      <el-table-column type="index" label="#" width="60"></el-table-column>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="admin" label="管理员权限">
        <template slot-scope="scope">
          {{identityObj[scope.row.admin]}}
        </template>
        {{ tableData.admin }}</el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
        <el-tag :type="scope.row.status == 1? 'success' : 'info'">{{scope.row.status == 1? '有效' : '无效'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" width="180">
        <template slot-scope="scope">
          <!-- {{ new Date(scope.row.create_time*1000).toLocaleDateString()}} -->
          {{$dayjs(scope.row.create_time * 1000).format('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column  label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" @click.stop="editList(scope.row)" class="cyan"><i class="el-icon-edit"></i>编 辑</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="scope.row.visible">
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="deleteList(scope.row)">确定</el-button>
            </div>
            <el-button type="text" class="red" slot="reference" @click.stop><i class="el-icon-delete" style="margin-left: 10px;"></i>删 除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
      background
      style="margin-top: 10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.page_size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <!-- 对话框 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="验证密码">
          <el-input v-model="form.checkPassword" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="是否为管理员">
          <el-radio-group v-model="form.admin">
            <el-radio  :label="1">是</el-radio>
            <el-radio  :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 详情弹框 -->
    <el-dialog title="详细信息" :visible.sync="dialogFormVisible" width="30%" center>
      <el-form :model="detailForm">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input v-model="detailForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="权限：" :label-width="formLabelWidth">
          <el-radio disabled v-model="detailForm.admin" :label="1">是</el-radio>
          <el-radio disabled v-model="detailForm.admin" :label="0">否</el-radio>
        </el-form-item>
        <el-form-item label="用户状态：" :label-width="formLabelWidth">
          <el-tag :type="detailForm.status == 1? 'success' : 'info'">{{detailForm.status == 1? '有效' : '无效'}}</el-tag>
        </el-form-item>
        <el-form-item label="创建日期：" :label-width="formLabelWidth">
          <el-input v-model="detailForm.time" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">关 闭</el-button>
      </div>
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
        admin: '-1',
        checkPassword: '',
      },
      detailForm: {
        name: '',
        admin: '',
        status: '',
        time: '',
      },
      radio: '1',
      title: '',
      dialogVisible: false,
      rowInfo: {},
      total: 1,
      page: {
        page: 1,
        page_size: 10,
      },
     identityObj: {
       '0': '否',
       '1': '是',
       '-1': '全部',
     },
     formLabelWidth: '100px',
     dialogFormVisible: false,
    }
  },
  created(){
    this.getList()
  },
  methods: {
    getList() {
      const data = {
        ...this.page,
      }
      this.$axios.post('/api/user/query',data)
      .then((res) => {
        this.tableData = res.data.list
        this.total = res.data.total
      })
      .catch((res) => {

      })
    },
    addList() {
      this.dialogVisible = true
      this.title = '添加人员'
    },
    editList(row) {
      this.form = row
      this.dialogVisible = true
      this.title = '编辑人员'
    },
    submit() {
      if(this.title == '添加人员'){
        const data = this.form
        this.$axios.post('/api/user/add',data)
        .then((res) => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.dialogVisible = false
            this.form = {}
            this.getList()
          }
        })
        .catch((res) => {
        })
      } else {
        const data = this.form
        this.$axios.post('/api/user/update',data)
        .then((res) => {
          this.$message.success(res.msg)
          this.dialogVisible = false
          this.form = {}
          this.getList()
        })
        .catch((res) => {
        })
      }
    },
    deleteList(row,column,event) {
      row.visible = false
      // const data = {
      //   id: row.id
      // }
      this.$axios.get(`/api/user/delete?id=${row.id}`)
      // this.$axios.get('/api/user/delete?id=' + row.id)
      // this.$axios.get('/api/user/delete',{params:{id: row.id}})
      .then((res) => {
        if(res.code == 200){
          this.$message.success(res.msg)
          this.getList()
        }
      })
      .catch((res) => {

      })
    },
    detail(row) {
      this.dialogFormVisible = true
      this.detailForm = row
      this.detailForm.time = this.$dayjs(row.create_time * 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.page.page_size = val
      this.getList()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page.page = val
      this.getList()
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
