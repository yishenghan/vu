<template>
  <div>
    <slot :message="message" :index="111"></slot>
  </div>
</template>

<script>
export default {
  name:"h1",
  data(){
    return{
      message:"hi页面的message"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
