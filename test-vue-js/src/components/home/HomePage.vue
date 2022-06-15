<template>
  <div class="home">
    <div>
      <img src="../../assets/robot-home.png" class="robot" aria-hidden="true" alt="">
    </div>
    <div class="get-started">
      <router-link to="/build">get Started</router-link> build your first app
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  text-align: center;
}
.robot{
  height: 300px;
}
</style>
