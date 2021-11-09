<template>
  <div class="main">
    <div>사용자 정보</div>
    <user-list :datas=datas></user-list>
  </div>
</template>

<script>

  import axios from "axios"
  import UserList from './UserList.vue'
  export default {
    name: 'User',
    components: {
      UserList
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
        axios.get('http://localhost:9000/users').then(res => {
          this.datas = res.data
        })
      },
      onSearch () {
        console.log('this.datas:', this.datas[0].email)
      }
    }
  }
</script>

<style scoped>
  .main {
    position: fixed !important;
    top: 50px !important;
    left: 500px;
    height: 100vh;
  }
</style>
