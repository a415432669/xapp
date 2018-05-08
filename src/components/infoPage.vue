<template>
  <div>
      <div class="header">
        <div class="left" @click="toInfo">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>通知列表</div>
        </div>
        <div class="center">{{headerTitle}}</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="infoPage">
        <div class="title">{{pageTitle}}</div>
        <div class="time">{{pageTime}}</div>
        <div class="content">
          <div class="detail">{{pageDetail}}</div>
          <div class="img">
            <img :src="pageImg" alt="">
          </div>
        </div>
        <div class="project">{{pageProject}}</div>
      </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      headerTitle:'天气预警',
      pageTitle:'今天下午有暴雨',
      pageTime:'2018-4-28 09:39',
      pageDetail:'  请各个班组人员及时准备各种事宜，妥善施工！！！',
      pageProject:'A施工总包方',
      pageImg:'../../static/img/timg.jpg'
    }
  },
  methods:{
    toInfo:function(){
      this.$router.push('/info')
    }
  },
  mounted:function(){
    //根据的通知ID的信息去用ajax获取文章信息
    console.log(this.$route.params.id)
    // this.headerTitle='天气预警',
    // this.pageTitle='今天下午有暴雨',
    // this.pageTime='2018-4-28 09:39',
    // this.pageDetail='  请各个班组人员及时准备各种事宜，妥善施工！！！',
    // this.pageProject='A施工总包方',
    // this.pageImg='../../static/img/timg.jpg'

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

.infoPage{
  width: 9rem;
  margin: 0.5rem auto;
  background: #F7F7F7;
  padding: 0.45rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.05rem 0.05rem #ccc;
  overflow: hidden;
  word-break: break-all
}

.infoPage>.title{
  height: 0.9rem;
  font-size: 0.45rem;
  line-height: 0.9rem;
  text-align: center;
}

.infoPage>.time{
  height: 0.44rem;
  font-size: 0.22rem;
  line-height: 0.44rem;
  text-align: center;
}

.infoPage>.content{
  font-size: 0.4rem;
}
.infoPage>.content .detail{
  padding: 0.45rem 0;
}
.infoPage>.content img{
  width: 8.1rem !important;
}
.infoPage>.project{
  text-align: right;
  color: #B22329;
  font-size: 0.45rem;
  padding-top: 0.45rem;
}

</style>
