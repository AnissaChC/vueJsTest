<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li @click="showHeader('Heads')" @keypress="showHeader('Heads')">Heads</li>
      <li @click="showHeader('Arms')" @keypress="showHeader('Arms')">Arms</li>
      <li @click="showHeader('Torsos')" @keypress="showHeader('Torsos')">Torsos</li>
      <li @click="showHeader('Bases')" @keypress="showHeader('Bases')">Bases</li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
  methods: {
    showHeader(part) {
      this.$router.push({ name: part });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.menu {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
  font-size: 20px;
}
ul {
  list-style-type: none;
}
a {
  color: palevioletred;
}
</style>
