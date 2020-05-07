<template>
  <!-- <transition name="fade"> -->
  <div
    class="bg-white absolute border p-2 z-20 shadow shadow-lg transition duration-200 text-xs w-40"
    :class="hover ? 'opacity-100' : 'opacity-25'"
    style="top: 100%;"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="font-bold">
      {{data.name}}
      <span v-if="data.stage===0"> Seed</span>
      <span v-if="data.stage===1"> Bud</span>
    </div>
    water: {{data.water.toFixed(2)}}<br>
    progress: {{data.progress.toFixed(2)}}<br>
    health: {{data.health}}
    <div class="pt-2">
      <button class="sell-button" @click="sell">sell</button>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    sell(e) {
      e.preventDefault();
      e.stopPropagation();

      this.$store.dispatch('sellPlant', this.data);
    },
  },
};
</script>

<style scoped>
  .sell-button {
    @apply w-full bg-black text-white text-sm font-bold tracking-wider;
  }

  .fade-enter-active {
    transition-delay: .75s;
  }

  .fade-leave-active {
    transition: none;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
