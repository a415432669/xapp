<template>
  <div>
      <div class="header">
        <div class="left" @click="toYgpj">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>用工评价</div>
        </div>
        <div class="center">我要评价</div>
      </div>

      <div class="headerzhanwei"></div>
      <div class="pane">
        <div class="paneTitle">
          <img src="../../static/img/bottomarrow.png" alt="">
          <div>选择施工总包</div>
        </div>
        <div class="select">
          <select name="company" id="company" v-model="chooseCompany">
            <option value="请选择施工总包" disabled selected>请选择施工总包</option>
            <option v-for="(item,index) in sgzb" :key="index" :value="item">{{item}}</option>
            
          </select>
        </div>
      </div>

      <div class="pane">
        <div class="paneTitle">
          <img src="../../static/img/bottomarrow.png" alt="">
          <div>评价等级</div>
        </div>
        <div class="selectRadio">
          <mt-radio v-model="radioValue" :options="['优秀', '良好', '差评']">
          </mt-radio>
        </div>
      </div>

      <div class="pane">
        <div class="paneTitle">
          <img src="../../static/img/bottomarrow.png" alt="">
          <div>评价内容</div>
        </div>
        <div class="inputText">
          <textarea name="pingjia" id="pingjia" class="pingjia" v-model="pjContent"></textarea>
          <img src="../../static/img/photo.png" alt="" @click="getImg">
          <img src="../../static/img/huatong.png" alt="" @click='btnRecorder'>
          <input type="file" id="photo" @change="selectImg" ref="photo" hidden>
        </div>

        <div class="upload">
          <div class="luyin" :class="{'delActive':isLuyin}" @click='btnRecorder'>{{btnContent}}</div>
          <div class="imgList">
            <div class="delActive" v-for="(item,index) in uploadImgs" :key="index" @click="delImg(index)">
            <div class="imgItem"  >
              <img :src="item" alt="">  
            </div>
            </div>
            
          </div>
          <div class="addImg" @click="getImg">

          </div>
        </div>

    </div>
    <div class="pjbutton">
        <img src="../../static/img/tijiao.png" alt="">
        <div class="text" @click="tjComment">提交</div>
        
      </div>
  </div>
</template>


<script>
import MP3Recorder from '../../static/js/recorder'
import axios from 'axios'
export default {
  data:function(){
    return {
      radioValue:null,
      //施工总包默认信息
      sgzb:[
        '广东建粤工程有限公司',
        '湖南建设工程有限公司',
        '山东建设工程有限公司'
      ],
      chooseCompany:'请选择施工总包',
      pjContent:'伙食很好，班组长对我很好，经常请我抽中华烟，贼鸡儿好评！',
      uploadImgs:[],
      isLuyin:false,
      recorder:'',
      btnContent:'开始录音',
      upImgs:[]
    }
  },methods:{
    toYgpj:function(){
      this.$router.push('/ygpj/fqpj')
    },
    getImg:function(){
      console.log(this.$refs.photo)
      // var fr = new FileReader()
      // console.log(fr)
      // fr.onload=function () {
      //     console.log(this.result);
          
      // };
      this.$refs.photo.click()
    },
    selectImg:function(e){
      console.log(e)
      var that = this;
      var fileImg = e.target.files[0]
      var selectResult = e.target.value
      var fr = new FileReader()
      fr.onload=function () {
          // console.log(this)
          // console.log(this.result);
          that.uploadImgs.push(this.result)
          that.upImgs.push(this.result)
          
      };
      fr.readAsDataURL(fileImg);
    },
    delImg:function(index){
      // this.$set(this.uploadImgs,index)
      this.uploadImgs.splice(index,1)
      this.upImgs.splice(index,1)
      // console.log(this.uploadImgs)
    },
    btnRecorder:function(){
      var that = this
      
      if(this.btnContent=='开始录音'){
        this.recorder.start();
        this.btnContent='正在录音中'
      }else if(this.btnContent=='正在录音中'){
        console.log(123)
        this.recorder.stop()
        this.btnContent='新的录音已完成'
        this.isLuyin = true;
        that.recorder.getMp3Blob(function(data){
            var url = URL.createObjectURL(data)
            var au = document.createElement('audio')
            au.src = url; 
            // document.body.appendChild(au)
            // au.play()
            console.log(url)
          })
      }else{
        this.btnContent='开始录音'
        this.isLuyin = false;
      }



       
      

    },
    tjComment:function(){
      //提交音频图片方式
      // var fd = new FormData()
      // fd.append('file', this.upImgs[0])
      // let config = {
      //     headers: {
      //         'Content-Type': 'multipart/form-data'
      //     }
      // }
      // axios.post(that.uploadUrl, fd,config).then( res => {
      //     console.log(res)
      // }).catch( res => {
      //     console.log(res)
      // })
      this.$router.push('/ygpj/fqpj')
    }
  },
  mounted:function(){
    this.recorder = new MP3Recorder({  
            debug:true,  
            funOk: function () {  
            },  
            funCancel: function (msg) {  
                    
            }  
    }); 
  }
}
</script>

<style scoped>
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

.pane{
width: 10rem;
background: #F7F7F7;
padding:0.25rem 0.4rem;
margin-top: 0.3rem;
}
.paneTitle{
display: flex;
align-items: center;
font-size: 0.4rem;

}
.paneTitle img{
  width: 0.35rem;
}
.paneTitle div{
  padding-left: 0.2rem;
}
.select{
  width: 8.9rem;
  height: 0.9rem;
  margin: 0.3rem auto;
  display: flex;
  position: relative;
}
.select select{
  width: 8.9rem;
  height: 0.9rem;
  padding: 0 0.35rem;
  border:none;
  appearance: none;
}
.select::after{
  content:'';
  display: block;
  position: absolute;
  border-top: 0.3rem solid #B22329;
  border-left: 0.15rem solid transparent;
  border-right: 0.15rem solid transparent;
  top: 0.3rem;
  right: 0.3rem;
}

.mint-radiolist{
  display: flex;
  font-size: 0.35rem;
}
.inputText{
  width: 8.9rem;
  margin: 0.35rem auto;
  height: 4rem;
  background: #fff;
  border-radius: 0.1rem;
  padding: 0.25rem 0.35rem;
  position: relative;
}
.inputText .pingjia{
  width: 100%;
  height: 2.9rem;
  border:none;
  appearance: none;
  resize: none;
  outline: none;
  font-size: 0.38rem;
  color: #999;
  
  
}
.inputText img:nth-child(2){
  width: 0.65rem;
  height: 0.65rem;
  position: absolute;
  bottom: 0.2rem;
  right: 1.5rem;
}
.inputText img:nth-child(3){
  width: 0.65rem;
  height: 0.65rem;
  position: absolute;
  bottom: 0.2rem;
  right: 0.5rem;
}

.upload{
  width: 8.9rem;
  margin: 0.35rem auto;
  height: 2.2rem;
  background: #fff;
  border-radius: 0.1rem;
  padding: 0.25rem 0.35rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.luyin{
  width: 3rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: #B22329;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
  position: relative;
}
.imgList{
  width: 2.6rem;
  display: flex;
  justify-content: space-between;
}
.imgList .imgItem{
  width: 1.1rem;
  height: 1.1rem;
  overflow: hidden;
  position: relative;
}
.imgList img{
  height: 1.1rem;
}
.addImg{
  width: 0.9rem;
  height: 0.9rem;
  background: url(../../static/img/redadd.png) no-repeat;
  background-size: 0.9rem 0.9rem;
}
.delActive{
  position: relative;
}
.delActive::before{
  content: "";
  display: block;
  height: 0.4rem;
  width: 0.4rem;
  background: #fff;
  border-radius: 0.25rem;
  position: absolute;
  top: -0.11rem;
  right: -0.11rem;
  z-index: 1;
}
.delActive::after{
  content: "";
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  background: url(../../static/img/close.png) no-repeat;
  background-size: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  position: absolute;
  top: -0.15rem;
  right: -0.14rem;
  box-shadow: 0 0 0.1rem #bbb; 
  z-index: 2;
}
.pjbutton{
  width: 3.8rem;
  margin: 0.6rem auto;
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
</style>
