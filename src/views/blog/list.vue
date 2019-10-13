<template>
    <div>
    <el-table v-loading="loading" :data="blogList" stripe>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="nickName" label="发布人"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="onDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 确认删除的对话框 -->
    <el-dialog title="提示" :visible.sync="delDialogVisible" width="30%">
      <span>确定删除该博客吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, del } from "@/api/blog"

import scroll from '@/utils/scroll'
export default {
    data(){
        return{
            blogList:[],
            count:50,
            loading:false,
            delDialogVisible:false,
            bolg:{

            },
        }
    },
    created(){
        this.getList()
    },
    mounted(){
      scroll.start(this.getList)
  },
    methods:{
        getList(){
            this.loading=true
            fetchList({
                start:this.blogList.length,
                count:this.count
            }).then((res)=>{
                console.log(res)
                const data=res.data
                const _bolgList=[]
                for(let i=0;i<data.length;i++){
                    _bolgList.push(JSON.parse(data[i]))
                }
                this.blogList=this.blogList.concat(_bolgList)
                if(_bolgList.length<this.count){
                    scroll.end()
                }
                this.loading=false
            })
        },
        onDel(row){
            this.delDialogVisible=true
            this.bolg=row
            console.log(this.bolg)
        },
        doDel(){
            del(this.bolg).then((res)=>{
                console.log(res)
                if(res.data.delBlogRes.deleted>0){
                    this.delDialogVisible=false
                    this.blogList=[]
                    this.$message({
                    message:'删除成功',
                    type:'success'
                })
                this.getList()
                }else{
                    this.$message.error('删除失败')
                }
            })
        },
    }
}
</script>

<style>

</style>