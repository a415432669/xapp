<template>
  <div class="salary">
      <div class="header">
        <div class="left" @click="toIndex">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>首页</div>
        </div>
        <div class="center">工资</div>
      </div>

      <div class="headerzhanwei"></div>
      <div class="search">
        <div class="input">
          <img class="imgSearch" src="../../static/img/search.png" alt="">
          <input type="text" placeholder="按月份查询">
          <img class="riliSearch" src="../../static/img/rili.png" alt="">
        </div>
      </div>


      <div class="listInfo">
        <div class="infoPane" v-for="(item,index) in infoList" :key="index" :class="{isRead:item.isRead}">
          <router-link :to="'/salaryPage/'+item.payId">
            <div class="infoHeader">
              <div class="top">
                <span>{{item.pay}}</span>
                <span class="iconDownload"></span>
              </div>
                
            </div>
            <div class="infoFooter">
              <div class="left">
                  <span>
                    {{item.time}}
                  </span>
                </div>
                <div class="right">
                  <span>
                    查看详情
                  </span>
                  <span class="iconRight">

                  </span>
                  
                </div>
            </div>
            <div class="infotime">
              {{item.time}}
            </div>
          </router-link>
        </div>
      </div>
      <div class="zhanwei"></div>
      <div class="pageBottom">到底了</div>
  </div>
</template>


<script>
import data from '../data'
export default {
  data:function(){
    return {
      infoList:data.salary
    }
  },
  methods:{
    toIndex:function(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.salary{
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


.search{
  background: #FAFAFA;
  width: 10rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

}
.search>.input{
  width: 9.5rem;
  margin: 0 auto;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: #E5E5E5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
.search>.input>.imgSearch{
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  top: 0.2rem;
  left: 0.3rem;
}
.search>.input>.riliSearch{
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  top: 0.2rem;
  right: 0.3rem;
}
.search>.input>input{
  width: 7.8rem;
  border: none;
  outline: none;
  height: 0.5rem;
  font-size: 0.4rem;
  background: transparent;
}


/* .listInfo{

} */
.listInfo>.infoPane{
  width: 9.5rem;
  height: 2.1rem;
  box-shadow: 0 0 0.05rem #ccc;
  margin: 0.85rem auto 0;
  font-size: 0.3rem;
  position: relative;
  background: #F7F7F7;
}
.listInfo>.infoPane.isRead{
  filter: grayscale(1);
  opacity: 0.7;
}
.listInfo>.infoPane .infoHeader{
  height: 1.2rem;
  width: 100%;
  border-bottom: 1px solid #666;
}
.listInfo>.infoPane .infoHeader>.top{
  height: 1.2rem;
  line-height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.35rem;
  font-size: 0.4rem;
  color: #B22329;
}


.listInfo>.infoPane .infoHeader>.top span.iconDownload{
  display: block;
  height: 0.65rem;
  width: 0.65rem;
  background: url('../../static/img/download.png') no-repeat;
  background-size: 0.65rem 0.65rem;
}

.listInfo>.infoPane .infoHeader>.bottom{
  line-height: 0.7rem;
  padding: 0 0.35rem;
  color: #B22329
}

.listInfo>.infoPane .infoFooter{
  height: 0.9rem;
  display: flex;
  padding: 0 0.35rem;
  justify-content: space-between;
  align-items: center;
  color: #999;
}
.infoFooter>.left,.infoFooter>.right{
  display: flex;
  justify-content: center;
  align-items: center;
}

.listInfo>.infoPane .infoFooter span.man{
  display: inline-block;
  width: 0.22rem;
  height: 0.32rem;
  background: url(../../static/img/man1.png) no-repeat;
  background-size:100% 100%;
  margin-right: 0.1rem;
}
.listInfo>.infoPane .infoFooter span.iconRight{
  display: inline-block;
  width: 0.22rem;
  height: 0.42rem;
  background: url(../../static/img/leftarrow.png) no-repeat;
  background-size:100% 100%;
  margin-left: 0.1rem;
}
.listInfo>.infoPane .infotime{
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: -0.4rem;
  font-size: 0.2rem;
  
}
.salary{
  position: relative;
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
</style>
