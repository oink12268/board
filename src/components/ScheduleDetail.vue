<template>
  <div>
    <p>매치 페이지</p>
    <table>
      <tr>
        <th>테니스 코트</th>
        <td>
          <select v-model="schedule.courtIdx">
            <option v-for="court in courts" :value="court.idx">{{court.name}}</option>
          </select>
        </td>

      </tr>
      <tr>
        <th>플레이어</th>
        <td>
          <select v-model="userIdx">
            <option v-for="user in users" :value="user.idx">{{user.userName}}</option>
          </select>
          <button @click="addPlayer">추가</button>
        </td>
      </tr>
    </table>

    <button @click="onSave">저장</button>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'ScheduleDetail',
    components: {
    },
    data () {
      return {
        schedule: {
          courtIdx: '',
          userIds: []
        },
        courts: [],
        users: [],
        userIdx: 0
      }
    },
    created() {
      this.getCourtsInfo()
      this.getUsersInfo()
    },
    methods: {
      getCourtsInfo () {
        axios.get('http://localhost:9000/courts').then(res => {
          this.courts = res.data
        })
      },
      getUsersInfo () {
        axios.get('http://localhost:9000/users').then(res => {
          this.users = res.data
        })
      },
      onChanged () {
        console.log('changed')
      },
      onSave () {
        // console.log('schedule data:', this.schedule)
        let param = this.schedule
        axios.post('http://localhost:9000/schedule', param).then(res => {
          if(res) {
            alert('saved')
          }
        })
        // axios.post('http://localhost:9000/schdule', param).then(
        //   function (response) {
        //     console.log(response)
        //     console.log('success')
        //   }).catch(function (error) {
        //   console.log(error)
        //   console.log('fail')
        // })
      },
      addPlayer () {
        this.schedule.userIds.push(this.userIdx)
      }
    }
  }
</script>

<style scoped>

</style>
