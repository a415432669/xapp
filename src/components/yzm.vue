<template>
  <div>
      <div class="header">
        <div class="left" @click="toLogin">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>返回登陆</div>
        </div>
        <div class="center">确认验证码</div>
      </div>
      <div class="headerzhanwei"></div>
      
      

      <div class="loginInput">
        <div class="inputTip" :class="{isActive:inputTipState}">
          {{inputTip}}
        </div>
        <div class="inputItem" :class="yzmStyle">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div class="inputItem">
          <div class="button" @click="toIndex">
            <a>确认并登陆</a>
          </div>
        </div>
      </div>
      <div class="logoBg">
        <img src="../../static/img/loginBg.png" alt="">
      </div>
  </div>
</template>


<script>
export default {
  data:function(){
    return {
      radioUser:'我同意用户使用协议',
      inputTip:'验证码错误',
      inputTipState:true,
      yzmStyle:{active:false}
    }
    
  },
  methods:{
    toIndex:function(){
      this.$router.push('/')
    },
    toLogin:function(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.isActive{
  display: block !important;
}
.inputTip{
  position: absolute;
  left: 0.75rem;
  top: 0.5rem;
  height: 0.96rem;
  line-height: 0.96rem;
  color:#A81E29; 
  font-size: 0.4rem;
  display: none;
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
  position: relative;
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
.inputItem::after{
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  display: block;
  position: absolute;
  background: url(../../static/img/inputerror.png) no-repeat;
  background-size: 0.55rem 0.55rem;
  top: 0.25rem;
  right: 0.2rem;

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
