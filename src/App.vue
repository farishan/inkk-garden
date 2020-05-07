<template>
  <div id="app" class="antialiased">
    <div
      class="absolute overflow-x-hidden"
      style="top: 10px; left: 10px; max-width: 112px;"
    >
      <Time class="mb-3" />
      <PlayerCookies />
      <div class="flex flex-col">
        <!-- <router-link class="nav-item" to="/">Home</router-link> -->
        <router-link class="nav-item" to="/garden">Garden</router-link>
        <router-link class="nav-item" to="/shop">Shop</router-link>
        <!-- <router-link class="nav-item" to="/plants">Plants</router-link> -->
        <!-- <router-link class="nav-item" to="/watering-cans">W. Cans</router-link> -->
        <router-link class="nav-item" to="/player">Player</router-link>
        <router-link class="nav-item" to="/settings">Settings</router-link>
        <router-link class="nav-item" to="/statistics">Statistics</router-link>
      </div>
    </div>
    <Alert />
    <router-view/>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import Time from '@/components/Time.vue';
import Alert from '@/components/Alert.vue';
import PlayerCookies from '@/components/PlayerCookies.vue';

export default {
  components: {
    Time,
    Alert,
    PlayerCookies,
  },
  data() {
    return {
      classes: 'flex items-center justify-center border border-gray-600 rounded shadow py-2 mb-3 overflow-x-auto',
    };
  },
  mounted() {
    console.log(this);
    this.$store.dispatch('init');
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

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
}

#app {
  background: #fff;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  overflow: hidden;
  position: relative;
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
  @apply text-white bg-black shadow-none border-black;
}
</style>
