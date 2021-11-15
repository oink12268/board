<template>
    <div>
      <div class='left'>
        <ul>
          <li v-for="menu in menus">
            <router-link :to="menu.link">{{menu.content}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Left',
    data () {
      return {
        menus: [
          {content: 'Court', link: '/Court'},
          {content: 'User', link: '/User'},
          {content: 'Schedule', link: '/Schedule'}
        ]
      }
    }
  }
</script>

<style scoped>
  a{color:black}
  a:hover{color:rgb(255,98,124);}
  .left{
    position:fixed;
    top:0px;
    left:0px;
    width:250px;
    height:1000px;
    background:rgba(255,98,124,0.6);
    padding:40px 0;
    overflow: hidden
  }
  .left ul {padding: 0 30px}
  .left ul li { font-size:25px;  height:75px;}
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  .left ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}
</style>
