<template>
  <div>
    <table>
      <colgroup>
        <col width="20%">
        <col width="30%">
        <col width="30%">
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>코트명</th>
          <th>플레이어</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, no) in datas">
          <td>{{no+1}}</td>
          <td>{{data.courtName}}</td>
          <td>
            <div v-for="user in data.userList">
              {{user.userName}}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'ScheduleList',
    components: {
    },
    props: {
      datas: {
        type: Array,
        default: () =>{
          return []
        }
      }

    },
    data () {
      return {
      }
    },
    created() {
    },
    methods: {
      getData () {
      },
      onSearch () {
      }
    }
  }
</script>

<style scoped>

</style>
