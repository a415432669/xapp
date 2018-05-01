<template>
  <div class="aqjy">
      <div class="header">
        <div class="left" @click="toIndex">
          <img src="../../static/img/rightarrow.png" alt="">
          <div>首页</div>
        </div>
        <div class="center">安全教育</div>
      </div>
      <div class="headerzhanwei"></div>
      <div class="iframe">
        <iframe src="http://game.65880.com/html5/" frameborder="0"></iframe>
      </div>
  </div>
</template>


<script>
export default {
  data:function(){
    return {}
  },
  methods:{
    toIndex:function(){
      this.$router.push('/')
    },
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
.aqjy{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.aqjy>.iframe{
  width: 10rem;
  flex: 1;
  position: relative;
  top: 0;
  bottom: 0;
}
.aqjy>.iframe>iframe{
  width: 100%;
  height: 100%;
}
</style>
