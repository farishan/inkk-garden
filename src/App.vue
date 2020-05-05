<template>
  <div id="app" class="antialiased">
    <Time />
    <p class="absolute bottom-0">player cookies: {{ $store.state.player.cookies }}</p>
    <div class="absolute flex flex-col" style="left: 10px; top: 137px;">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/garden">Garden</router-link>
      <router-link class="nav-item" to="/shop">Shop</router-link>
      <router-link class="nav-item" to="/plants">Plants</router-link>
      <router-link class="nav-item" to="/watering-cans">W. Cans</router-link>
      <router-link class="nav-item" to="/player">Player</router-link>
    </div>
    <Alert />
    <router-view/>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import Time from '@/components/Time.vue';
import Alert from '@/components/Alert.vue';

export default {
  components: {
    Time,
    Alert,
  },
  mounted() {
    console.log(this);

    // Starting time
    this.$store.dispatch('start');
  },
};
</script>

<style>
* {
  outline: none !important;
}

*:focus {
  outline: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item {
  @apply border border-gray-600 rounded shadow mb-2 px-2 font-bold;
}

.nav-item.router-link-exact-active {
  color: #42b983;
}
</style>
