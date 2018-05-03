<template>
  <div class="index">
    


    <div class="header">
      <div class="left"></div>
      <div class="center">首页</div>
      <div class="right clock" :class="{'active':isInfo}" @click="toInfo">
        <img class="clockImg"  src="../../static/img/clock.png" alt="">
        <span>通知</span>
      </div>
    </div>
    <div class="headerzhanwei"></div>

    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item v-for="(value,index) in imgList" :key="index">
        <img :src="value" alt="">
      </mt-swipe-item>
    </mt-swipe>

    


    <mt-swipe class="scrollNews" :auto="5000" :show-indicators='false' :speed='1000'  >
      <mt-swipe-item class="itemNews" v-for="(item,index) in toutiao" :key='index'>
        <a :href="item.url">{{item.title}}</a>
      </mt-swipe-item>
    </mt-swipe>


    <div class="row">
      <div class="pane">
        <div class="paneTop">
          <div class="leftTop" >
            <img class="img" src="../../static/img/123.png" alt="">
            <div class="title">
              安全教育培训
            </div>
          </div>
          <div class="rightTop" @click="toAqjy">
            <img src="../../static/img/leftarrow.png" alt="">
          </div>
        </div>
        <div class="paneBottom">
          <p>请积极参与安全教育培训，答题赢大奖！</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="pane">
        <div class="paneTop">
          <div class="leftTop">
            <img src="../../static/img/66.png" alt="">
            <div class="title">
              我的工资
            </div>
          </div>
          <div class="rightTop" @click='toSalary'>
            <div class="more">更多</div>
            <img src="../../static/img/leftarrow.png" alt="">
          </div>
        </div>
        <div class="paneBottom">
          <div class="gongzi">
            <mt-swipe class="gzSwiper" :show-indicators="false" :auto="6000"  :speed='1000'>
              <mt-swipe-item :class="{'is-active':gzIndex==1}">
                <div class="gzList">
                  <div class="gzItem" v-for="(value,index) in gongzi[0]" :key="index">
                    <div class="gzTime">{{value.time}}</div>
                    <div class="gzPay">{{value.pay}}.00元</div>
                  </div>
                  
                </div>
              </mt-swipe-item>
              <mt-swipe-item :class="{'is-active':gzIndex==2}">
                <div class="gzList">
                  <div class="gzItem" v-for="(value,index) in gongzi[1]" :key="index">
                    <div class="gzTime">{{value.time}}</div>
                    <div class="gzPay">{{value.pay}}.00元</div>
                  </div>
                  
                </div>
              </mt-swipe-item>
              <mt-swipe-item :class="{'is-active':gzIndex==3}">
                <div class="gzList">
                  <div class="gzItem" v-for="(value,index) in gongzi[2]" :key="index">
                    <div class="gzTime">{{value.time}}</div>
                    <div class="gzPay">{{value.pay}}.00元</div>
                  </div>
                  
                </div>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          
        </div>
      </div>
    </div>

    <div class="row">
      <div class="pane">
        <div class="paneTop">
          <div class="leftTop">
            <img class="img" src="../../static/img/00.png" alt="">
            <div class="title">
              我的考勤
            </div>
          </div>
          <div class="rightTop">
            <img src="../../static/img/leftarrow.png" alt="">
          </div>
        </div>
        <div class="paneBottom">
          <div class="kaoqing">
            <h3 class="kqTitle">{{kaoqing.month}}月份出勤天数：{{kaoqing.day}}天</h3>
            <div class="kqrl">
              <div style="" id="calendar"></div>

            </div>
          </div>
        </div>
      </div>

      <div class="zhanwei"></div>
    </div>
  
  
    <div class="tabbar">
      <router-link to="/">
        <div class="tabItem is-selected" id="sy">
          <img slot="icon" src="../../static/img/shouye.png">
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
        <div class="tabItem" id="me">
          <img slot="icon" src="../../static/img/me1.png">
          我的
        </div>
      </router-link>
    </div>
  
  </div>

  
</template>

<script>
import data from '../data.js'
import '../../static/css/sign2.css'
import $ from 'jquery'
import calUtil from '../../static/js/calendar2.js'
// $(function(){
//   //ajax获取日历json数据
//   var signList=data.index.kaoqing.signList;
//    calUtil.init(signList);
// })


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isInfo:data.index.isInfo,
      imgList:data.index.imgList,
      toutiao:data.index.touTiao,
      gongzi:data.index.gongzi,
      kaoqing:data.index.kaoqing.detail,
      selected:'首页',//tab切换
      gzIndex:1,//1,2,3
    }
  },
  methods:{
    gzLeft:function(){
      console.log(this.gzIndex)
      if(this.gzIndex==1){
        this.gzIndex = 3
        
      }else{
        this.gzIndex-=1
      }
      console.log(this.gzIndex)
      
      
    },
    gzRight:function(){
      console.log(this.gzIndex)
      if(this.gzIndex==3){
        this.gzIndex = 1
        
      }else{
        this.gzIndex+=1
      }
      console.log(this.gzIndex)
      
      
    },
    toGzll:function(){
      console.log(this)
      this.$router.push('/gzll')
    },
    toInfo:function(){
      this.$router.push('/info')
    },
    toSalary:function(){
      this.$router.push('./salary')
    },
    toAqjy:function(){
      this.$router.push('./aqjy')
    }
  },
  mounted:function(){
    var signList=data.index.kaoqing.signList;
    calUtil.init(signList);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header>.right{
  right: -0.5rem;
  top:0.05rem;
}
.is-active{
  z-index: 1000;
}


.swiper{
  width: 10rem;
  height: 4.6rem;
}
.swiper img{
  width: 10rem;
}
.swiper .mint-swipe-indicator{
  border: 20px solid #fff;
  opacity: 1;
}

.scrollNews{
  height: 0.9rem;
  width: 10rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  overflow: hidden;
  box-shadow: 0 0.05rem 0.05rem #999;
}
.scrollNews>.news{
  width: 30rem;
  animation: scrollNews 30s linear infinite;
}

.scrollNews .itemNews{
  width: 100rem;
  display: inline-block;
  padding: 0 0.3rem;
}
.scrollNews .itemNews a{
  color: #B42B30;
}

/* .row{

} */
.row>.pane{
  margin: 0.35rem 0.3rem 0rem;
  box-shadow:  0 0.05rem 0.05rem #999;
  font-size: 0.4rem;
  background: #F7F7F7;
}

.row>.pane>.paneTop{
 display: flex;
 height: 0.75rem;
 padding: 0 0.2rem;
 justify-content: space-between;
 align-items: center;
}

.row>.pane>.paneTop>.leftTop{
  display: flex
}
.row>.pane>.paneTop>.leftTop>img{
  width: 0.4rem;
  height: 0.4rem;
}
.row>.pane>.paneTop>.leftTop>.title{
  font-size: 0.3rem;
  padding: 0 0.2rem;
}

.row>.pane>.paneTop>.rightTop{
  height: 0.75rem;
  display: flex;
  font-size: 0.3rem;
  align-items: center;
}
.row>.pane>.paneTop>.rightTop>.more{
  padding: 0 0.2rem;
}
.row>.pane>.paneTop>.rightTop img{
  width: 0.2rem;
  height: 0.34rem;
}

.row>.pane>.paneBottom>p{
  padding: 0 0.2rem;
  font-size: 0.3rem;
  height: 0.75rem;
  line-height: 0.75rem;
}

.row>.pane>.paneBottom>.gongzi{
  height: 2rem;
  width: 7.6rem;
  margin: 0 auto;
  position: relative;
}
.row>.pane>.paneBottom>.gongzi>.circleLeft{
  width: 0.35rem;
  height: 0.35rem;
  position: absolute;
  left: -0.4rem;
  bottom:0.8rem;
}
.row>.pane>.paneBottom>.gongzi>.circleRight{
  width: 0.35rem;
  height: 0.35rem;
  position: absolute;
  right: -0.4rem;
  bottom:0.8rem;
}
.row>.pane>.paneBottom>.gongzi img{
  width: 100%;
  height: 100%;
}

.row>.pane>.paneBottom>.gongzi>.gzSwiper{
  height: 2rem;
  width: 7.6rem;
}
.row>.pane>.paneBottom>.gongzi>.gzSwiper .gzList{
  height: 2rem;
  width: 7.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.row>.pane>.paneBottom>.gongzi>.gzSwiper .gzItem{
  height: 1.2rem;
  width: 2.4rem;
  background: #B22329;
  border-radius: 0.1rem;
  color: #fff;
  padding: 0.2rem;
}
.row>.pane>.paneBottom>.gongzi>.gzSwiper .gzItem>.gzTime{
  font-size: 0.16rem;
}
.row>.pane>.paneBottom>.gongzi>.gzSwiper .gzItem>.gzPay{
  font-size: 0.3rem;
  font-weight: 900;
}


.kqTitle{
  padding: 0 0.9rem;
  font-size: 0.3rem;
  font-weight: normal;
  color: #B42B30;
}
.kqrl{
  padding-bottom: 0.3rem;
}
</style>
