<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/logo.png" alt=""/>
          Bild-Your-App
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RobotBuilder/>
    <HomePage/>
  </main>
</template>

<script>
import RobotBuilder from './components/build/RobotBuilder.vue';
import HomePage from './components/home/HomePage.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
    HomePage,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto; /*pour centrer*/
  padding: 30px;
  background-color: aliceblue;
  width: 90%;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
