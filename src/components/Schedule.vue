<template>
  <div>
    <div v-if="isDetail">
      <schedule-detail></schedule-detail>
    </div>
    <div v-else>
      <button @click="goDetail">신규 매치</button>
      <schedule-list :datas="datas"></schedule-list>
    </div>
  </div>
</template>

<script>
  import ScheduleDetail from './ScheduleDetail.vue'
  import ScheduleList from './ScheduleList.vue'
  import axios from "axios";

  export default {
    name: 'Schedule',
    components: {
      ScheduleList,
      ScheduleDetail
    },
    data () {
      return {
        isDetail: false,
        datas: []
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
