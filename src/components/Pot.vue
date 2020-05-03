<template>
  <div :style="style" class="border relative">
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
