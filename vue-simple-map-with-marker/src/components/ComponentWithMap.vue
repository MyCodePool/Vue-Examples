<template>
  <GMapMap
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 100vw"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  }
}
</script>

<style>
body {
  margin: 0;
}

.mapview{
    position: absolute !important;
    height: 100% !important;
    width: 100% !important;
    padding: 0px !important;
    border-width: 0px !important;
    margin: 0px !important;
    left: 0px !important;
    top: 0px !important;
    bottom: 0px !important;
    touch-action: pan-x pan-y !important;
    margin: 0px !important;
}
</style>
