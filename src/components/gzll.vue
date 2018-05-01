<template>
  <div class="index">
    


    <div class="header">
      <div class="left"></div>
      <div class="center">工作履历</div>
    </div>
    <div class="headerzhanwei"></div>

    
    <div class="listInfo">
        <div class="infoPane" v-for="(item,index) in infoList" :key="index">
          <router-link :to="'/gzllPage/'+item.gzId">
            <div class="infoHeader">
              <div class="top">
                <span>{{item.projectName}}</span>
                <span class="chuizi"></span>
              </div>
              <div class="bottom">
                {{item.company}}&nbsp;&nbsp;{{item.workname}}
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
            
          </router-link>
        </div>
      </div>




  
    <div class="zhanwei"></div>
    <div class="tabbar">
      <router-link to="/">
        <div class="tabItem" id="sy">
          <img slot="icon" src="../../static/img/shouye1.png">
          首页
        </div>
      </router-link>
    
    
      <router-link to="/gzll">
        <div class="tabItem  is-selected" id="gzll">
          <img slot="icon" src="../../static/img/gzll2.png">
          工作履历
        </div>
      </router-link>
    
    
      <router-link to="/ygpj">
        <div class="tabItem" id="ygpj">
          <img slot="icon" src="../../static/img/ygpj.png">
          用工评价
        </div>
      </router-link>
    
    
      <router-link to="/me">
        <div class="tabItem" id="me">
          <img slot="icon" src="../../static/img/me1.png">
          我的
        </div>
      </router-link>
    </div>
  
  </div>

  
</template>

<script>
import data from '../data'
export default {
  data:function(){
    return {
      infoList:data.gzll
    }
  },
  methods:{
    toIndex:function(){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header>.right{
  right: -0.5rem;
}

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
  color: #B22329;
  
}

.listInfo>.infoPane .infoHeader>.top span.chuizi{
  display: block;
  height: 0.65rem;
  width: 0.65rem;
  background: url('../../static/img/label.png') no-repeat;
  background-size: 0.65rem 0.65rem;
}


.listInfo>.infoPane .infoHeader>.bottom{
  line-height: 0.7rem;
  padding: 0 0.35rem;
  color :#999;
  
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


</style>
