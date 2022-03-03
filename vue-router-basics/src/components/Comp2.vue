<template>
  <div class="container">
    <p @click="countUp">Component B (ClickMe)</p>
  </div>
</template>

<script>
export default {
  name: 'Comp2',
    methods: {
      countUp() {
        this.$store.commit("increment", 2)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100vh;
  width:  100%;
  background: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
}
</style>
