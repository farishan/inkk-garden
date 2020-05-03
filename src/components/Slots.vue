<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="(slot, index) in $store.state.garden.slots" :key="index">
      <Potslot :data="slot" />
    </div>
  </div>
</template>

<script>
import Potslot from './Potslot.vue';

export default {
  components: {
    Potslot,
  },
};
</script>
