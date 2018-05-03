<template>
  <div>
      <div class="header">
        <div class="center">用工评价</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="navTab">
        <div class="navItem">
          <router-link to="/ygpj/sdpj" :class="{active:$route.name=='sdpj'}">收到的评价</router-link>
        </div>
        <div class="navItem">
          <router-link to="/ygpj/fqpj" :class="{active:$route.name=='fqpj'}">我发起的评价</router-link>
        </div>
        <div class="navItem">
          <router-link to="/ygpj/flwq" :class="{active:$route.name=='flwq'}">法律维权</router-link>
        </div>
      </div>
      <div class="navTabContent">
        <router-view></router-view>
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
        <div class="tabItem" id="gzll">
          <img slot="icon" src="../../static/img/gzll.png">
          工作履历
        </div>
      </router-link>
    
    
      <router-link to="/ygpj/sdpj">
        <div class="tabItem is-selected" id="ygpj">
          <img slot="icon" src="../../static/img/ygpj2.png">
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
export default {
  data:function(){
    return {}
  },
  mounted:function(){
    // console.log(this.$route)
  }
}
</script>

<style scoped>
.navTab{
  width: 10rem;
  height: 1.2rem;
  display: flex;
  background: #FAFAFA;
  font-size: 0.35rem;
  justify-content: space-around;
  align-items: center;
}
.navItem{
  width: 33%;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
.navItem>a.active{
  border-bottom: 2px solid #B22329;
  padding: 0.1rem 0;
}
</style>
