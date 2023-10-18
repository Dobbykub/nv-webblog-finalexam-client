<template>
    <div>
            <div class="">
                <ul class="topnav">
                    <li><router-link :to="{ name: 'speakers' }" class="font">Speaker</router-link></li>
                    <li><router-link :to="{ name: 'users' }" class="size">Users</router-link></li>
                </ul>
                <div class="clearfix" />
            </div>
        </div>
    </template>
    
    
    <script>
    // import 'bootstrap/dist/css/bootstrap.min.css'
    // import 'jquery/src/jquery.js'
    // import 'bootstrap/dist/js/bootstrap.min.js'
    export default {
      name: 'app',
      logout() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
    
          this.$router.push({
            name: 'login'
          })
        }
    };
    
    </script>
    <style scoped>
    ul.topnav {
      list-style-type: none;
      margin-top: -60px;
      padding: 0;
      overflow: hidden;
       /* เปลี่ยนสี navbar  */
      background-color: #251e1e;
    }
    
    ul.topnav li {float: left;}
    
    ul.topnav li a {
      display: block;
      /* / เปลี่ยนสี font */ 
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    ul.topnav li a:hover:not(.active) {background-color: #111;}
    
    ul.topnav li a.active {background-color: rgb(184, 236, 217);}
    
    ul.topnav li.right {float: right;}
    
    @media screen and (max-width: 600px) {
      ul.topnav li.right, 
      ul.topnav li {float: none;}
    }
    .clearfix {
        clear: left;
    }
    .font {
        font-size: 20px;
    }
    .size
    {
        font-size: 15px;
        margin-top: 5px;
    }
    .log{
        margin-right: 5px;
    }
    </style>