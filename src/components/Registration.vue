<template>
  <div>
    <div>
<!--      <p>기본정보</p>-->
      <input type="text" v-model="email" placeholder="이메일을 입력하세요">
      <input type="password" v-model="password" placeholder="비밀번호를 입력하세요">
      <input type="text" v-model="userName" placeholder="이름을 입력하세요">
      <div>
        <button @click="onSave">저장</button >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Registration',
  data () {
    return {
      email: '',
      password: '',
      userName: ''
    }
  },
  created () {
  },
  methods: {
    onSave () {
      let param = {
        email: this.email,
        password: this.password,
        userName: this.userName
      }
      axios.post('http://localhost:9000/signup', param).then(
        function (response) {
          console.log(response)
          console.log('success')
        }).catch(function (error) {
          console.log(error)
        console.log('fail')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
