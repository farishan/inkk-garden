<template>
  <div
    class="h-screen flex items-center justify-center"
    style="padding-top: 10px; max-height: 600px;"
  >
    <div class="w-5/12 mx-auto">
      <Slots />
      <p v-if="$store.state.player.plants.length === 0">
        No plants.
        <router-link class="text-gray-600 underline" to="/shop">buy some</router-link>
      </p>
    </div>

    <div class="absolute -mb-3" style="right: 10px; bottom: 10px;">
      <!-- Render player's watering cans. -->
      <div class="flex justify-center items-center flex-col">
        <div
          v-if="selectedCan && selectedCan !== null"
          class="counter"
          style="width: 30px; height: 30px"
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

      <Sprinkler class="mb-3" v-if="$store.state.player.sprinkler"/>
      <Collector class="mb-3" v-if="$store.state.player.collector"/>
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

<style scoped>
  .counter {
    @apply border relative flex items-center justify-center;
    @apply text-blue-700 pt-2 pb-1 rounded shadow mb-3 text-sm;
  }
</style>
