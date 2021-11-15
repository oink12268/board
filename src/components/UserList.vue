<template>
  <div>
    <table>
      <colgroup>
        <col width="20%">
<!--        <col width="20%">-->
        <col width="30%">
        <col width="30%">
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
<!--          <th>ID</th>-->
          <th>이름</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, no) in datas">
          <td>{{no+1}}</td>
<!--          <td>{{data.id}}</td>-->
          <td>{{data.userName}}</td>
          <td>{{data.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'UserList',
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
