<template>
  <div>
    <Slots />
    <WateringCan />
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
