<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link active-class="activeRoot" class="nav-link" :to="{name: 'Home'}" exact>
          <img class="logo" src="./assets/logo.png" alt=""/>
          Bild-Your-App
          </router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="activeRoot" class="nav-link" :to="{name: 'Build'}" exact>
            Bild
          </router-link>
        </li>
<!--        <li>user: {{user.userName}}-->
<!--        <button @click="changeUserName()">change Name</button>-->
<!--        </li>-->
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: { userName: 'jhon' },
    };
  },
  /* envoyere l'info a tout ces desendant */
  provide() {
    return {
      userName: this.user,
    };
  },
  methods: {
    changeUserName() {
      this.user.userName = 'Name';
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>

/*.content >>> ou bien /deep/ .robot-name {
  color: red;
  border: aquamarine 1px solid;
}*/

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
  width: 95%;
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

.nav-link{
  text-decoration: none;
  color: inherit;
}
/*.router-link-active {*/
/*  color: white;*/
/*}*/

.activeRoot{
  color: aquamarine;
}
</style>
