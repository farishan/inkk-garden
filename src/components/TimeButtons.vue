<template>
  <div class="cursor-pointer block flex justify-center border-t">
    <button
      class="border w-1/3"
      :class="$store.state.time.on ? 'border-gray-600' : ''"
      :disabled="$store.state.time.on"
      @click="start"
    >
      <Play />
    </button>
    <button
      class="border w-1/3"
      :class="!$store.state.time.on ? 'border-gray-600' : ''"
      :disabled="!$store.state.time.on"
      @click="pause"
    >
      <Pause />
    </button>
    <button
      class="border w-1/3"
      :class="$store.state.time.on ? 'border-gray-600' : ''"
      :disabled="$store.state.time.on"
      @click="start"
    >
      <Play />
    </button>
  </div>
</template>

<script>
import Pause from './icons/Pause.vue';
import Play from './icons/Play.vue';

export default {
  components: {
    Pause,
    Play,
  },
  methods: {
    toggle() {
      if (this.$store.state.time.on) {
        this.$store.commit('switch', false);
      } else {
        this.$store.dispatch('start');
      }
    },
    start() {
      this.$store.dispatch('start');
    },
    pause() {
      this.$store.commit('switch', false);
    },
  },
};
</script>
