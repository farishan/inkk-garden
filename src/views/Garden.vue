<template>
  <div>
    <Slots />

    <!-- Render player's watering cans. -->
    <p>Selected can: {{ JSON.stringify($store.state.player.selectedCan) }}</p>
    <div v-for="(can, index) in $store.state.player.wateringCans" :key="index">
      <WateringCan :data="can"/>
    </div>
  </div>
</template>

<script>
import Slots from '@/components/Slots.vue';
import WateringCan from '@/components/WateringCan.vue';

export default {
  components: {
    Slots,
    WateringCan,
  },
};
</script>
