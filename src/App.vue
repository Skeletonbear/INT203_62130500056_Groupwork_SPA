<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand  ">
          <span class="material-icons text-red-400 mx-auto">favorite PET</span>
        </a>
      </div>
      <ul class="nav navbar-nav">
       <li class="active"><a > <router-link to="/">Home</router-link> |</a></li>
        <li><a ><router-link to="/cat">Cat </router-link>   |</a></li>
        <li><a ><router-link to="/Dog">Dog</router-link>  |</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#"><span class="glyphicon glyphicon-log-in text-red-400"></span> Login</a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
