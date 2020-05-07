<template>
  <div
    class="bg-white absolute border p-2 z-20 shadow shadow-lg transition duration-200 text-xs w-40"
    :class="hover ? 'opacity-100' : 'opacity-25'"
    style="top: 100%;"
    v-if="show"
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
</template>

<script>
export default {
  props: {
    data: Object,
    show: Boolean,
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
</style>
