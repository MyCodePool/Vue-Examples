<template>
  <div class="container">
    <p @click="countUp">Component C (ClickMe)</p>
  </div>
</template>

<script>
export default {
  name: 'Comp3',
    methods: {
      countUp() {
        this.$store.commit("increment", 3)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100vh;
  width:  100%;
  background: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
}
</style>
