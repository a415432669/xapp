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
        <div class="inputTip" :class="{isActive:inputTipState}">
          {{inputTip}}
        </div>
        <div class="inputItem" :class="sfzStyle">
          <input type="text" placeholder="请输入身份证号" v-model="sfz">
        </div>
        <div class="inputItem" :class="mobileStyle">
          <input type="text" placeholder="请输入手机号" v-model="mobile">
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
      radioUser:'我同意用户使用协议',
      inputTip:'身份证或手机格式错误',
      inputTipState:false,
      sfz:'',
      mobile:'',
      sfzIsRight:true,
      mobileIsRight:true,
      sfzStyle:{active:true},
      mobileStyle:{active:true}
      // sfzStyle:{isActive:this.sfzIsRight},
      // mobileStyle:{isActive:this.mobileIsRight}
    }
    
  },
  methods:{
    toYhxy:function(){
      
      this.$router.push('/yhxy')
    }
  },mounted:function(){
    this.$watch("sfz", function (newValue, oldValue) {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if(reg.test(newValue) === false) {
        this.sfzIsRight =true
      }else{
        this.sfzIsRight =false
      }
      // console.log(this.sfzIsRight)
      this.sfzStyle={active:!this.sfzIsRight}
      this.inputTipState = this.sfzIsRight||this.mobileIsRight
    })

    this.$watch("mobile", function (newValue, oldValue) {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if(reg.test(newValue) === false) {
        this.mobileIsRight =true
      }else{
        this.mobileIsRight =false
      }
      this.mobileStyle={active:!this.mobileIsRight}
      this.inputTipState = this.sfzIsRight||this.mobileIsRight
    })
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
  top: 6.15rem;
  height: 0.96rem;
  line-height: 0.96rem;
  color:#A81E29; 
  font-size: 0.4rem;
  display: none;
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
