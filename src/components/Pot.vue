<template>
  <div :style="style" class="rounded-sm shadow border-gray-200 relative">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        height: '70px',
        width: '70px',
      },
    };
  },
};
</script>
