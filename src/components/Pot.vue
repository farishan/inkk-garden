<template>
  <div
    :style="style"
    class="rounded-sm shadow relative"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  data() {
    return {
      style: {
        height: '70px',
        width: '70px',
      },
    };
  },
  methods: {
    onDrop(e) {
      const itemId = e.dataTransfer.getData('itemID');
      const itemPosition = e.dataTransfer.getData('itemPosition');
      this.$store.dispatch('changePosition', {
        id: itemId,
        from: itemPosition,
        to: this.index,
      });
    },
  },
};
</script>
