<template>
  <div class="MovieView">
      {{reactiveMessage.message }}
  </div>
  <p>名字:{{ name }}</p>
  <button @click="setMessage">修改</button>
</template>

<script>
import {ref,reactive} from "vue";

export default {
  name: "MovieView",
  components:{
  },
  render(){
    return <h2>dasssssssssssssssds</h2>

  },
  setup(){
    const message = "Hello World"
    const refMessage = ref(message)
    const reactiveMessage = reactive({
      message:"Hello World"
    })



    const info = reactive({
      name:"kobe",
      age:30
    })
    let {name,age} = info
    const setMessage = () => {
      reactiveMessage.message = "Hello World1"
    }
    return{
      name,
      age,
      message,
      refMessage,
      reactiveMessage,
      setMessage
    }
  }
}
</script>

<style scoped>

</style>