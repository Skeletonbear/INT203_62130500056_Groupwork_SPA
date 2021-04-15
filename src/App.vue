<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
          <span class="material-icons text-red-400 mx-auto">favorite PET</span>
        </a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active">
          <a> <router-link to="/">Home</router-link> |</a>
        </li>
        <li>
          <a><router-link to="/cat">Cat </router-link> |</a>
        </li>
        <li>
          <a><router-link to="/Dog">Dog</router-link> |</a>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a
            ><span class="glyphicon glyphicon-log-in text-red-400"></span
            ><router-link to="/login"> Login </router-link></a
          >
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<style>
#app {
  text-align: center;
}
#nav {
  padding: 30px;
}
</style>
