<template>
  <div>
      <div class="header">
        <div class="left" @click="toBack">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>返回</div>
        </div>
        <div class="center">错误提示</div>
      </div>
      <div class="headerzhanwei"></div>
      
      

      <div class="errorContent">
        <img src="../../static/img/404.png" alt="">
        <div class="errorText">
          抱歉我们努力了但页面还是丢了
        </div>
      </div>
      <div class="bottomError">
        错误代码404
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
    toBack:function(){
      //获取之前的页面，返回之前的页面
      var backpage = this.$route.params.id
      if(backpage=='index'){
        this.$router.push('/')
      }else{
        this.$router.push('/'+backpage)
      }
      
      
    },
    
  },mounted:function(){
    console.log(this.$route)
  }
}
</script>

<style scoped>
.errorContent{
  width: 10rem;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.errorContent img{
  width: 3.5rem;
  height: 3.5rem;
}
.errorContent .errorText{
  font-size: 0.35rem;
  color: #999;
  line-height: 1rem;
  height: 1rem;
}

.bottomError{
  height: 1rem;
  font-size: 0.5rem;
  text-align: center;
  width: 10rem;
  position: fixed;
  bottom: 0;
  left: 0;
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
