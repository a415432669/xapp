<template>
  <div>
      <div class="listInfo">
        <div class="infoPane" v-for="(item,index) in sdpj" :key="index">
         
            <div class="infoHeader">
              <div class="top">
                <span class="content">{{item.title}}</span>
                <span class="chuizi">
                  <img :src="item.imgSrc" alt="">
                </span>
              </div>
              <div class="bottom">
                {{item.company}}
              </div>  
            </div>
            <div class="infoFooter">
              <div class="left">
                  <span>
                    {{item.time}}
                  </span>
                </div>
                
            </div>
            
         
        </div>
      </div>

      <div class="pjbutton">
        <img src="../../static/img/add.png" alt="">
        <div class="text">我要评价</div>
        
      </div>
  </div>
</template>


<script>
import data from '../data'
export default {
  data:function(){
    return {
      sdpj:data.sdpj
    }
  }
}
</script>

<style scoped>
.pjbutton{
  width: 3.8rem;
  margin: 1rem auto;
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.45rem;
  background: #B22329;
  color: #fff;
  font-size: 0.45rem;
}
.pjbutton>img{
  width: 0.5rem;
  height: 0.5rem;
}
.pjbutton>.text{
  padding-left: 0.3rem;
}



.listInfo{
  width: 10rem;
  height: 10.5rem;
  overflow: scroll;
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
.listInfo>.infoPane .infoHeader>.top span.content{
  width: 6.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}

.listInfo>.infoPane .infoHeader>.top span.chuizi{
  display: block;
  
}
.listInfo>.infoPane .infoHeader>.top span.chuizi img{
  width: 1.1rem;
  height: 1.1rem;
  transform: translate(0rem,0.5rem)
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
