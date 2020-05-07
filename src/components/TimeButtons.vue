<template>
  <div class="cursor-pointer block flex justify-between border-t p-2 -mx-1">
    <button
      class="border rounded w-1/3 mx-1 px-1"
      :class="$store.state.time.on && !$store.state.time.fast ? 'active shadow' : ''"
      :disabled="$store.state.time.on && !$store.state.time.fast"
      @click="start"
    >
      <Play />
    </button>
    <button
      class="border rounded w-1/3 mx-1 px-1"
      :class="!$store.state.time.on ? 'active shadow' : ''"
      :disabled="!$store.state.time.on"
      @click="pause"
    >
      <Pause />
    </button>
    <button
      class="border rounded w-1/3 mx-1 px-1"
      :class="$store.state.time.fast ? 'active shadow' : ''"
      :disabled="$store.state.time.fast"
      @click="fast"
    >
      <FastForward />
    </button>
  </div>
</template>

<script>
import Pause from './icons/Pause.vue';
import Play from './icons/Play.vue';
import FastForward from './icons/FastForward.vue';

export default {
  components: {
    Pause,
    Play,
    FastForward,
  },
  methods: {
    toggle() {
      if (this.$store.state.time.on) {
        this.$store.commit('time/switch', false);
      } else {
        this.$store.dispatch('time/start');
      }
    },
    start() {
      this.$store.commit('time/normal');
      this.$store.commit('time/switch', false);

      setTimeout(() => {
        this.$store.dispatch('time/start');
      }, 300);
    },
    pause() {
      this.$store.commit('time/normal');
      this.$store.commit('time/switch', false);
    },
    fast() {
      this.$store.commit('time/fast');
      this.$store.commit('time/switch', false);

      setTimeout(() => {
        this.$store.dispatch('time/start');
      }, 300);
    },
  },
};
</script>

<style scoped>
  .active {
    @apply border-gray-600;
  }
</style>
