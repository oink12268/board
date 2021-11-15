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
    methods: {
      goDetail () {
        this.isDetail = true;
      }
    }
  }
</script>

<style scoped>

</style>
