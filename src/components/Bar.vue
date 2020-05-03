<template>
  <div
    class="absolute w-full transition duration-200"
    :class="classes"
    :style="style"
  />
</template>

<script>
export default {
  props: {
    customStyle: Object,
    width: Number,
    classes: String,
  },
  computed: {
    style() {
      return {
        transformOriginX: 0,
        transform: `scaleX(${this.width})`,
        height: '3px',
        ...this.customStyle,
      };
    },
  },
};
</script>
