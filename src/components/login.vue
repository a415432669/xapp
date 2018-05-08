<template>
  <div>
      <div class="header">
        <div class="center">登陆</div>
      </div>
      <div class="headerzhanwei"></div>
      

      <div class="loginInput">
        <div class="logo"><img src="../../static/img/logo.png" alt=""></div>
      <div class="logoBg">
        <img src="../../static/img/loginBg.png" alt="">
      </div>
        <div class="inputItem active">
          <input type="text" placeholder="请输入身份证号">
        </div>
        <div class="inputItem active">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="inputItem">
          <div class="button">
            <router-link to="/yzm">发送验证码</router-link>
          </div>
        </div>
        <div class="agreement">
          <div class="toYhxy" @click="toYhxy"></div>
          <mt-radio v-model="radioUser" :options="['我同意用户使用协议']">
          </mt-radio>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  data:function(){
    return {
      radioUser:'我同意用户使用协议'
    }
    
  },
  methods:{
    toYhxy:function(){
      
      this.$router.push('/yhxy')
    }
  }
}
</script>

<style scoped>

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
  z-index: 10;
}

.logo{
display: flex;
justify-content: center;
}
.logo>img{
width: 3rem;
height: 0.74rem;
}
.logoBg{
margin: 1.6rem 0 3rem;
display: flex;
justify-content: center;
}
.logoBg>img{
width: 9rem;
height: 1.7rem;
}

.loginInput{
  width: 10rem;
  height: 12.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 0.5rem;
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
