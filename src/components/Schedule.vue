<template>
  <div>
    <div v-if="isDetail">
      <schedule-detail></schedule-detail>
    </div>
    <div v-else>
      <button @click="goDetail">신규 매치</button>

    </div>
  </div>
</template>

<script>
  import ScheduleDetail from './ScheduleDetail.vue'
  import axios from "axios";

  export default {
    name: 'Schedule',
    components: {
      ScheduleDetail
    },
    data () {
      return {
        isDetail: false
      }
    },
    created() {
      this.getData()
    },
    methods: {
      goDetail () {
        this.isDetail = true;
      },
      getData () {
        axios.get('http://localhost:9000/schedules').then(res => {
          this.datas = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
