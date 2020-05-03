<template>
  <div>
    {{ JSON.stringify(data) }}
    <img
      class="mx-auto border cursor-pointer"
      :class="$store.state.watering.active ? 'border-gray-900' : ''"
      :src="`/images/${data.image}`"
      @click="handleClick"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
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
