<template>
  <div>
      <div class="listInfo">
        <div class="infoPane" v-for="(item,index) in fqpj" :key="index">
         
            <div class="infoHeader">
              <div class="top">
                <span class="content">{{item.title}}</span>
                <span class="chuizi">
                  <audio :src="item.audioSrc" ref="audio" hidden ></audio>
                  <img :src="playStatesImg[index]" alt="" @click="playAudio(index)">
                  <span class="audioTime">{{playTimes[index]}}</span>
                </span>
              </div>
              <div class="bottom">
                {{item.company}}
              </div>  
            </div>
            <div class="imgList">
              <div class="imgItem" v-for="(imgItem,i) in item.imgList" :key="i">
                <img :src="imgItem" data-preview-src="" :data-preview-group="index">
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
        <div class="text" @click="toWypj">添加评价</div>
        
      </div>
  </div>
</template>


<script>
import data from '../data'
import zoom from  '../../static/js/mui.zoom.js'
import previewImage from '../../static/js/mui.previewimage.js'

export default {
  data:function(){
    return {
      fqpj:data.fqpj,
      playStates:Array(data.fqpj.length),
      playImg:'https://a415432669.github.io/xaShow/static/img/play.png',
      pauseImg:'https://a415432669.github.io/xaShow/static/img/pause.png',
      playTimes:Array(data.fqpj.length),
      timerInter:null
    }
  },mounted:function(){
    // console.log(mui)
    zoom(mui)
    previewImage(mui)
    // console.log(mui.previewImage)
    mui.previewImage();
  
  
  
  
  
  },methods:{
    toWypj:function(){
      this.$router.push('/wypj')
    },
    playAudio:function(index){
      var that = this
      var a = this.$refs.audio[index]
      var length = this.$refs.audio.length
      if(a.paused){
        for(var i = 0;i<length;i++){
           this.$refs.audio[i].pause()
           this.$set(this.playStates,i, false);
           clearInterval(this.timerInter)
        }
        a.play()
        this.$set(this.playStates,index, true);
        this.timerInter = setInterval(function(){
          var min = parseInt(a.currentTime/60)
          min = min<10?'0'+min:min
          var sec = parseInt(a.currentTime)%60
          sec = sec<10?'0'+sec:sec
          that.$set(that.playTimes,index,min+":"+sec)
        },1000)
      }else{
        a.pause()
        this.$set(this.playStates,index, false);
        clearInterval(this.timerInter)
      }
      // console.log(a.paused)
      // console.log(this.playStates)
      // console.log(this.playStatesImg)
    }
  },computed:{
    playStatesImg:function(){
      var that = this;
      var length = this.playStates.length;
      var newL = []
      for(var i = 0;i< length;i++){
        newL.push(this.playStates[i]?that.pauseImg:that.playImg)
      }
      // console.log(this.playStates[1])
      // console.log(newL)
      return newL
    }
  }
}
</script>

<style scoped>
.imgList{
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  padding: 0.4rem 0.3rem 0rem;

}
.imgList>.imgItem:nth-child(1){
  padding-left: 0;
}
.imgList>.imgItem:last-child{
  padding-right: 0.3rem;
}
.imgList>.imgItem{
  padding-left:0.3rem; 
}
.imgList>.imgItem>img{
  height: 1.65rem;
}


.pjbutton{
  width: 3.8rem;
  margin: 0rem auto;
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
  height: 12rem;
  overflow: scroll;
}
.listInfo>.infoPane{
  width: 9.5rem;
  height: auto;
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
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.35rem;
  font-size: 0.4rem;
  color: #B22329;
  
}
.listInfo>.infoPane .infoHeader>.top span.content{
  width: 6.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}

.listInfo>.infoPane .infoHeader>.top span.chuizi{
  display: flex;
  
}
.listInfo>.infoPane .infoHeader>.top span.chuizi img{
  width: 0.7rem;
  height: 0.7rem;
  transform: translate(0rem,0.5rem)
}
.listInfo>.infoPane .infoHeader>.top span.chuizi .audioTime{
  height: 0.7rem;
  width: 1.8rem;
  padding: 0 0.3rem;
  transform: translate(0rem,0.4rem)
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
  width: 100%;
  text-align: right;
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
