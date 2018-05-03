<template>
  <div class="salaryPage">
      <div class="header">
        <div class="left" @click="toInfo">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>工资列表</div>
        </div>
        <div class="center">{{headerTitle}}</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="pageContent">
        <div class="row" v-for="(item,index) in salary" :key='index'>
          <div class="rowLeft">{{item.title}}</div>
          <div class="rowRight">{{item.value}}</div>
        </div>
      </div>

      <div class="problem">有问题 ?</div>
      <div class="zhanwei"></div>
      <div class="pageBottom">到底了</div>
  </div>
  
</template>


<script>
export default {
  data(){
    return {
      headerTitle:'4月工资详情',
      salary:[
        {
          title:'代发年月',
          value:'2018.04'
        },{
          title:'银行账号',
          value:'---'
        },{
          title:'所在企业',
          value:'---'
        },{
          title:'实发合计',
          value:'---'
        },{
          title:'基本工资',
          value:'---'
        },{
          title:'绩效工资',
          value:'---'
        },{
          title:'住房补贴',
          value:'---'
        },{
          title:'过节费',
          value:'---'
        },{
          title:'应发合计',
          value:'---'
        },{
          title:'扣个人所得税',
          value:'---'
        },{
          title:'扣工会费',
          value:'---'
        },{
          title:'扣养老保险',
          value:'---'
        },{
          title:'扣医疗保险',
          value:'---'
        },{
          title:'扣生育保险',
          value:'---'
        },{
          title:'扣失业保险',
          value:'---'
        },
      ]
    }
  },
  methods:{
    toInfo:function(){
      this.$router.push('/salary')
      
    }
  },
  mounted:function(){
    //根据的通知ID的信息去用ajax获取文章信息
    console.log(this.$route.params.id)
    // this.salary = [ajax获取过来的列表]，json数据格式请参考上面，data.salary格式

  }
}
</script>

<style scoped>
.salaryPage{
  position: relative;
}
.header>.left{
  display: flex;
  font-size: 0.3rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.3rem;
}
.header>.left>img{
  height: 0.3rem;
}
.header>.left>div{
  padding-left: 0.2rem;
}
.pageContent{
  width: 9rem;
  margin: 0.4rem auto;
  box-shadow: 0 0 0.05rem #ccc;
  font-size: 0.35rem;
}
.pageContent>.row{
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 2px solid #E5E5E5;
  display: flex;
}
.pageContent>.row>.rowLeft{
  width: 3.2rem;
  border-right: 2px solid #e5e5e5;
  padding-right:  0.7rem;
  text-align: right;
}
.pageContent>.row>.rowRight{
  text-align: center;
  flex: 1;
}
.pageBottom{
  width: 10rem;
  height: 2rem;
  font-size: 0.2rem;
  text-align: center;
  line-height: 2rem;
  position: absolute;
  bottom: 0;
}

.problem{
  width: 2.9rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  margin: 0 auto;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  background: #E5E5E5;
}
</style>
