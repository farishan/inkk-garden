<template>
  <div style="height: 50px; width: 50px" class="border relative cursor-pointer">
    <div
      v-if="data && data !== null"
      class="w-full h-full"
      :class="$store.state.watering.active ? 'border-gray-900' : ''"
      :style="{backgroundImage: `url('/images/${data.image}')`}"
      @click="handleClick"
    >
      <!-- <bar
        :width="data.water/data.capacity"
        :classes="'bg-blue-400 top-0'"
      /> -->
    </div>
  </div>
</template>

<script>
// import Bar from './Bar.vue';

export default {
  props: {
    data: Object,
  },
  components: {
    // Bar,
  },
  methods: {
    handleClick() {
      if (this.$store.state.watering.active) {
        this.$store.dispatch('deselectWateringCan');
      } else {
        this.$store.dispatch('selectWateringCan', this.data);
      }
    },
  },
};
</script>
