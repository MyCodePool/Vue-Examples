<template>
  <div class="navbar">
    <div class="logo">
      Logo
    </div>
    <div class="nav_buttons">
      <p>Counter: {{ $store.state.count }}</p>
      <div class="btn"><router-link to="/">Component A</router-link></div>
      <div class="btn"><router-link to="/Comp2">Component B</router-link></div>
      <div class="btn"><router-link to="/Comp3">Component C</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  .navbar .logo {
    background: blue;
    padding: 20px 10px;
    margin: 0 10px;
    color: white;
  }

  .navbar .nav_buttons {
    display: flex;
  }

  .navbar .nav_buttons a {
    margin: 0 10px;
    padding: 10px 20px;
    background: black;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .active {
    color: red !important;
    background: white !important;
    border: 1px solid black;
  }


</style>
