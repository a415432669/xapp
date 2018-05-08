<template>
  <div id="mePage">
      <div class="header">
        <div class="center">个人信息</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="userInfo">
        <img class="headImg" :src="userInfo.userImg" alt="">
        <div class="userContent">
            <span>{{userInfo.username}}</span>
            <span>{{userInfo.userSex}}</span>
        </div>
      </div>

      <div class="infoList">
        <div class="infoItem" v-for="(item,index) in userInfo.infoList" :key="index">
          <div class="itemLeft">{{item.key}}</div>
          <div class="itemRight">{{item.value}}</div>
        </div>
        <div class="infoItem">
          <router-link to="/login"  style="width:100%; text-align:center; background:#A81E29;color:#fff;">退出登陆</router-link>
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
        <div class="tabItem" id="gzll">
          <img slot="icon" src="../../static/img/gzll.png">
          工作履历
        </div>
      </router-link>
    
    
      <router-link to="/ygpj/sdpj">
        <div class="tabItem" id="ygpj">
          <img slot="icon" src="../../static/img/ygpj.png">
          用工评价
        </div>
      </router-link>
    
    
      <router-link to="/me">
        <div class="tabItem is-selected" id="me">
          <img slot="icon" src="../../static/img/me2.png">
          我的
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import data from '../data.js'
export default {
  data:function(){
    return {
      userInfo:data.userInfo
    }
  }
}
</script>

<style scoped>
#mePage{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.userInfo{
  width: 10rem;
  height: 4.6rem;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userInfo img{
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
}
.userContent{
  height: 0.5rem;
  line-height: 1rem;
  font-size: 0.5rem;
}
.infoList{
 margin-top: 0.45rem; 
}
.infoItem{
  margin-top: 0.15rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.4rem;
  display: flex;
  background: #FAFAFA;
}
.infoItem>.itemLeft{
  width: 30%;
  height: 1rem;
  padding-left: 0.5rem;
  text-align: left;
}
.infoItem>.itemRight{
  width: 70%;
  height: 1rem;
  padding-right: 0.5rem;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
