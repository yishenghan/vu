<template>
  <div>
    <hello-world message="我是通过静态传过来的props对象"></hello-world>
    <p>自定义属性传值，在子页面使用props对象|数组接受</p>
    <hello-world :="obj" :IsShow="true"></hello-world>
    <p>动态自定义属性传值，在子页面使用props对象|数组接受</p>
    <button @click="changeObj">修改</button>


    <hello-world value="静态$attrs传过来的"></hello-world>
    <hello-world :value="obj.value"></hello-world>
  </div>
</template>

<script setup>

import HelloWorld from "@/components/HelloWorld"
import {reactive} from "vue";

const obj = reactive({
  msg:"我是通过动态绑定传过来的props对象",
  content:"我是内容",
  value:"动态绑定$attrs传过来的",
})

const changeObj = () =>{
  obj.msg="我是修改之后的对象msg"
  obj.message="我是修改之后的对象message"
  obj.value = 1
}

</script>

<style>

</style>