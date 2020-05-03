<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <p>Time:</p>
      <pre>
      {{ JSON.stringify(this.$store.state.time, null, 2) }}
      {{ this.$store.getters.period }}
      </pre>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this);

    // Starting time
    this.$store.dispatch('start');

    // Test stopping time
    setTimeout(() => {
      this.$store.commit('switch', false);
    }, 3000);

    // Test re-starting time
    setTimeout(() => {
      this.$store.dispatch('start');
    }, 6000);
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
