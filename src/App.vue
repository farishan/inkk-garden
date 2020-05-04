<template>
  <div id="app">
    <Time />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/plants">Plants</router-link> |
      <router-link to="/watering-cans">Watering Cans</router-link> |
      <router-link to="/player">Player</router-link> |
      <router-link to="/garden">Garden</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import Time from '@/components/Time.vue';

export default {
  components: {
    Time,
  },
  mounted() {
    console.log(this);

    // Starting time
    this.$store.dispatch('start');

    // Test stopping time
    // setTimeout(() => {
    //   this.$store.commit('switch', false);
    // }, 3000);

    // Test re-starting time
    // setTimeout(() => {
    //   this.$store.dispatch('start');
    // }, 6000);
  },
};
</script>

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
