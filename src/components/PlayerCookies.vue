<template>
  <div class="relative">
    <div :class="classes">
      <p class="mr-1 leading-none align-middle text-sm">
        {{ cookies }}
      </p>
      <Cookie />
    </div>

    <transition name="fade">
    <p
      v-show="diff !== 0"
      class="absolute top-0 right-0 px-1 text-white font-bold text-xs opacity-50 rounded"
      :class="diff > 0 ? 'bg-green-600' : 'bg-red-600'"
    >
      <span v-show="diff > 0">+</span>{{ diff }}
    </p>
    </transition>
  </div>
</template>

<script>
import Cookie from '@/components/icons/Cookie.vue';

export default {
  components: {
    Cookie,
  },
  computed: {
    cookies() {
      return this.$store.state.player.cookies;
    },
  },
  data() {
    return {
      classes: 'flex items-center justify-center border border-gray-600 rounded shadow py-2 mb-3 overflow-x-auto',
      diff: 0,
      timeout: null,
    };
  },
  watch: {
    cookies(after, before) {
      clearTimeout(this.timeout);
      const diff = before - after;
      this.diff = diff * -1;

      this.timeout = setTimeout(() => {
        this.diff = 0;
      }, 1000);
    },
  },
};
</script>
