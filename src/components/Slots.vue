<template>
  <div class="flex flex-wrap justify-center -mx-4 pt-4">
    <div
      v-for="(slot, index) in $store.state.garden.slots"
      :key="index"
      class="px-2 mb-4"
    >
      <pot class="pot" v-if="slot !== null">
        <plant :data="slot" />
      </pot>
      <pot class="pot" v-else>
        null
      </pot>
    </div>
  </div>
</template>

<script>
import Plant from './Plant.vue';
import Pot from './Pot.vue';

export default {
  components: {
    Pot,
    Plant,
  },
};
</script>
