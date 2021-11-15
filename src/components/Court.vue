<template>
  <div>
    <court-list :datas="datas"></court-list>
  </div>
</template>

<script>
  import axios from "axios"
  import CourtList from './CourtList.vue'

  export default {
    name: 'Court',
    components: {
      CourtList
    },
    data () {
      return {
        datas: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData () {
        axios.get('http://localhost:9000/courts').then(res => {
          this.datas = res.data
        })
      }
    }
  }
</script>

<style scoped>
</style>
