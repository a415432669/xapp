<template>
  <div>
      <div class="header">
        <div class="left" @click="toLogin">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>返回登陆</div>
        </div>
        <div class="center">用户使用协议</div>
      </div>
      <div class="headerzhanwei"></div>
      
      

      <div class="yhxyContent">
        <div v-html="yhxyContent">
          {{yhxyContent}}
          
        </div>
      </div>
      
  </div>
</template>


<script>
import data from '../data.js'
export default {
  data:function(){
    return {
      radioUser:'我同意用户使用协议',
      yhxyContent:data.yhxy
    }
    
  },
  methods:{
    toLogin:function(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.yhxyContent{
  font-size: 0.35rem;
  padding: 0.3rem;
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
.agreement{
  padding-top: 0.1rem;
  color:#A81E29; 
  position: relative;
}
.agreement .toYhxy{
  position: absolute;
  height: 0.8rem;
  width: 5rem;
  /* border: 1px solid #ccc; */
  top: 0.2rem;
  left:0.7rem;
}

.logo{
margin-top: 2rem;
display: flex;
justify-content: center;
}
.logo>img{
width: 3rem;
height: 0.74rem;
}
.logoBg{
width: 10rem;
margin-top: 1.6rem;
display: flex;
justify-content: center;
position: fixed;
bottom: 0.5rem;
left: 0;
}
.logoBg>img{
width: 9rem;
height: 1.7rem;
}

.loginInput{
  width: 10rem;
  padding: 1rem 0.5rem;
}
.loginInput .inputItem{
  width: 9rem;
  position: relative;
  height: 0.96rem;
  display: flex;
  margin-top: 0.35rem;
}
.loginInput .inputItem input{
  width: 9rem;
  border:1px solid #aaa;
  height: 0.96rem;
  line-height: 0.96rem;
  font-size: 0.4rem;
  color: #aaa;
  outline: none;
  padding: 0 0.2rem;
  border-radius: 0.01rem;
}
.inputItem.active::after{
  content: "";
  width: 0.55rem;
  height: 0.45rem;
  display: block;
  position: absolute;
  background: url(../../static/img/loginInput.png) no-repeat;
  background-size: 0.55rem 0.45rem;
  top: 0.25rem;
  right: 0.2rem;

}

.loginInput .button a{
  display: block;
  width: 9rem;
  border:1px solid #aaa;
  height: 0.96rem;
  line-height: 0.96rem;
  font-size: 0.45rem;
  color: #fff;
  outline: none;
  padding: 0 0.2rem;
  border-radius: 0.01rem;
  text-align: center;
  background: #A81E29;
}
.agreement{

}
</style>
