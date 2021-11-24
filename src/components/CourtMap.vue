<template>
  <div>
    <div id="map"></div>
    <button @click="displayMarker(markerPositions)">mark</button>
    <button @click="drawLocations">courtLocations</button>
  </div>
</template>

<script>
  import axios from "axios"
  import CourtList from './CourtList.vue'

  export default {
  name: 'CourtMap',
  data () {
    return {
      markerPositions: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
      ],
      markers: [],
      datas: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:9000/courts').then(res => {
        this.datas = res.data
      })
    },
    initMap () {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.475881, 126.969552),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    drawLocations () {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      for(let i = 0; i < this.datas.length; i++) {
        let marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(this.datas[i].lat, this.datas[i].lng),
          title: this.datas[i].name
        });
        let infowindow = new kakao.maps.InfoWindow({
          position: new kakao.maps.LatLng(this.datas[i].lat, this.datas[i].lng),
          content: this.datas[i].name
        });

        infowindow.open(this.map, marker)
      }
    }
  }
}
</script>

<style scoped>
  #map {
    width: 1200px;
    height: 800px;
  }
</style>
