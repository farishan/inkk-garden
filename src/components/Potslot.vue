<template>
  <div class="border">
    <div
      class="plant"
      v-if="data === null"
    >
      null
    </div>
    <div
      v-if="data !== null"
      class="plant"
      :style="{backgroundImage: `url('/images/plants/${data.image}')`}"
    >
      {{ data.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
  .plant {
    animation: animate 1s steps(4) infinite;
    width: 70px;
    height: 70px;
  }

  @keyframes animate {
    from {background-position: 0 0;}
    to {background-position: -280px 0}
  }
</style>
