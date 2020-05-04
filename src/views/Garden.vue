<template>
  <div>
    <div class="mb-40">
      <Slots />
    </div>

    <Sprinkler />
    <Collector />

    <!-- Render player's watering cans. -->
    <div class="flex justify-center items-center">
      <div
        v-if="selectedCan && selectedCan !== null"
        class="border relative flex items-center justify-center text-blue-700"
        style="width: 50px; height: 50px"
      >
        <div>
          <bar
            :width="selectedCan.water/selectedCan.capacity"
            :classes="'bg-blue-400 top-0 left-0'"
          />
          {{ $store.state.player.selectedCan.water }}
        </div>
      </div>

      <div v-for="(can, index) in $store.state.player.wateringCans" :key="index">
        <WateringCan :data="can"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slots from '@/components/Slots.vue';
import Bar from '@/components/Bar.vue';
import WateringCan from '@/components/WateringCan.vue';
import Sprinkler from '@/components/Sprinkler.vue';
import Collector from '@/components/Collector.vue';

export default {
  components: {
    Slots,
    Bar,
    WateringCan,
    Sprinkler,
    Collector,
  },
  computed: {
    progress() {
      const selected = this.$store.state.player.selectedCan;
      return (selected.water / selected.capacity) * 100;
    },
    selectedCan() {
      return this.$store.state.player.selectedCan;
    },
  },
};
</script>
