<template>
  <div id="app" class="mapview">
    <ComponentWithMap  class="mapview"/>
  </div>
</template>

<script>
  import ComponentWithMap from './components/ComponentWithMap.vue'

export default {
  name: 'App',
  components: {
    ComponentWithMap
  }
}
</script>