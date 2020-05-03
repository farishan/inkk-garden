<template>
  <div>
    {{ JSON.stringify($store.state.watering.cans.data) }}
    <img
      class="mx-auto border cursor-pointer"
      :class="$store.state.watering.active ? 'border-gray-900' : ''"
      src="/images/watering_can.png"
      @click="handleClick"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.dispatch('toggleWatering');
    },
  },
};
</script>
