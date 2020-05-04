<template>
  <div
    class="border relative cursor-pointer p-2 rounded shadow mb-3"
    :class="isActive ? 'shadow border-gray-600' : ''"
  >
    <div style="height: 50px; width: 50px">
      <div
        v-if="data && data !== null"
        class="w-full h-full"
        :style="{backgroundImage: `url('/images/${data.image}')`}"
        @click="handleClick"
      >
        <!-- <bar
          :width="data.water/data.capacity"
          :classes="'bg-blue-400 top-0'"
        /> -->
      </div>
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
  computed: {
    isActive() {
      if (this.$store.state.player.selectedCan !== null) {
        return this.data.id === this.$store.state.player.selectedCan.id;
      }

      return false;
    },
  },
  methods: {
    handleClick() {
      if (this.$store.state.watering.active) {
        if (this.isActive === false) {
          this.$store.dispatch('deselectWateringCan');
          this.$store.dispatch('selectWateringCan', this.data);
        } else {
          this.$store.dispatch('deselectWateringCan');
        }
      } else {
        this.$store.dispatch('selectWateringCan', this.data);
      }
    },
  },
};
</script>
