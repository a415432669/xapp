<template>
  <div>
      <div class="header">
        <div class="left" @click="toIndex">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>首页</div>
        </div>
        <div class="center">通知公告</div>
      </div>

      <div class="headerzhanwei"></div>
      <div class="listInfo">
        <div class="infoPane" v-for="(item,index) in infoList" :key="index" :class="{isRead:item.isRead}">
          <router-link :to="'/infoPage/'+item.infoId">
            <div class="infoHeader">
              <div class="top">
                <span>{{item.title}}</span>
                <span :class="{clond:item.isWeather,picture:!item.isWeather}"></span>
              </div>
              <div class="bottom">
                {{item.content}}
              </div>  
            </div>
            <div class="infoFooter">
              <div class="left">
                  <span class="man"></span>
                  <span>
                    {{item.project}}
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
      
      
  </div>
</template>


<script>
import data from '../data'
export default {
  data:function(){
    return {
      infoList:data.info.infoList
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





/* .listInfo{

} */
.listInfo>.infoPane{
  width: 9.5rem;
  height: 2.65rem;
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
  height: 1.75rem;
  width: 100%;
  border-bottom: 1px solid #666;
}
.listInfo>.infoPane .infoHeader>.top{
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.35rem;
  font-size: 0.4rem;
}

.listInfo>.infoPane .infoHeader>.top span.clond{
  display: block;
  height: 0.65rem;
  width: 0.65rem;
  background: url('../../static/img/clond.png') no-repeat;
  background-size: 0.65rem 0.65rem;
}
.listInfo>.infoPane .infoHeader>.top span.picture{
  display: block;
  height: 0.65rem;
  width: 0.65rem;
  background: url('../../static/img/77.png') no-repeat;
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
</style>
