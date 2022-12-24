<template>
  <div>
  <h2> {{ message }}</h2>
  <h2> {{ msg }}</h2>
  <h2> {{ content }}</h2>
  </div>

  <input type="text" :value="$attrs.value">

  <div v-show="IsShow"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //props: ['message','msg','content']
  props: {
    message:String,
    msg:String,
    content:String,
    IsShow:Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
