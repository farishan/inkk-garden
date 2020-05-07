<template>
  <div class="text-center pt-4 border border-gray-600 rounded shadow">
    <div class="text-sm mb-1">Day {{ $store.state.time.days }}</div>
    <div class="flex items-center justify-center mb-4">
      <div>
        <img
          class="mx-auto"
          src="/images/sun.png"
          v-show="$store.getters['time/period'] === 'day'"
        />
        <img
          class="mx-auto"
          src="/images/moon.png"
          v-show="$store.getters['time/period'] === 'night'"
        />
      </div>
    </div>
    <time-buttons />
  </div>
</template>

<script>
import TimeButtons from './TimeButtons.vue';

export default {
  components: {
    TimeButtons,
  },
};
</script>
