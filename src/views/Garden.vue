<template>
  <div>
    <p>Slots:</p>
    <Slots />

    <p>Player's plants:</p>
    <pre>
    {{ JSON.stringify($store.state.player.plants, null, 2) }}
    </pre>
  </div>
</template>

<script>
import Slots from '@/components/Slots.vue';

export default {
  components: {
    Slots,
  },
};
</script>
