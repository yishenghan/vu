<template>
  <div></div>
</template>

<script>
export default {
  name: "GameView",
  inject: ['projectName'],
  created() {
    console.log(this.projectName)
  }
}
</script>

<style scoped>

</style>