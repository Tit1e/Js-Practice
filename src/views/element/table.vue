<template>
<div>
  <card title="要求">
    <ul>
      <li>根据接口文档 <strong>ApiDocument.pdf</strong> 中的 【人员管理】部分的接口实现人员的管理功能</li>
    </ul>
  </card>
  <card title="回答内容">
  </card>
</div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
    }
  },
  created(){
<<<<<<< HEAD
    this.getList()
    this.getlist1()
  },
  mounted() {
  },
  methods: {
    getlist1(){
       axios.post('http://129.204.79.16:3000/api/user/query',{admin: 1})
      .then((res) => {
        if(res.data.code === 200){
          
        }
      })
      .catch((res) => {

      })
    },
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
=======
  },
  methods: {
>>>>>>> 9d43f854b6b9f77c570f3dfd85f45c6abb6cb082
  }
}
</script>

<style lang="scss" scoped>
</style>
