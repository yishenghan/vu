<template>
  <div >
      <div id="div" :style="{marginLeft:left+'px',marginTop:top+'px'}"
           @mousedown="isActive=true"
           @mouseup="isActive=false"
           @mousemove="move($event)"></div>
        <span></span>
      <el-slider v-model="value"/>
  </div>
</template>

<script>
export default {
  name: "v_code",
  data(){
    return{
      value:0,
      left:0,
      top :0,
      isActive:false,

    }
  },
  methods:{
     move:function (){
       let div = document.getElementById("div")
       console.log(div.offsetLeft);

     }
  },
  watch: {

  }

}

</script>

<style scoped>
#div{
  width: 40px;
  height: 40px;
  background-color: #2c3e50;
}

</style>