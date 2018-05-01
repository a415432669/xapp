<template>
  <div>
      <div class="header">
        <div class="left" @click="toInfo">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>履历</div>
        </div>
        <div class="center">{{gzll[0].title}}</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="pageContent">
        <div class="row" v-for="(item,index) in gzll" :key='index'>
          <div class="rowLeft">{{item.title}}</div>
          <div class="rowRight">{{item.value}}</div>
        </div>
      </div>

      
      <div class="zhanwei"></div>
      <div class="pageBottom">到底了</div>
  </div>
  
</template>


<script>
export default {
  data(){
    return {
      gzll:[
        {
          title:'项目名称',
          value:'铭泰城市广场'
        },{
          title:'所属企业',
          value:'---'
        },{
          title:'所在班组',
          value:'---'
        },{
          title:'人员类型',
          value:'---'
        },{
          title:'工种',
          value:'---'
        },{
          title:'进场时间',
          value:'---'
        },{
          title:'退场时间',
          value:'---'
        },{
          title:'考勤天数',
          value:'---'
        },{
          title:'领薪金额',
          value:'---'
        }
      ]
    }
  },
  methods:{
    toInfo:function(){
      this.$router.push('/gzll')
    }
  },
  mounted:function(){
    //根据的通知ID的信息去用ajax获取文章信息
    console.log(this.$route.params.id)
    // this.gzll = [ajax获取过来的列表]，json数据格式请参考上面，data.gzll格式

  }
}
</script>

<style scoped>
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
