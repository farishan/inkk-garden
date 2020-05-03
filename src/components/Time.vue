<template>
  <div>
    <p>Time:</p>
    <pre>
    {{ JSON.stringify(this.$store.state.time, null, 2) }}
    {{ this.$store.getters.period }}
    </pre>
  </div>
</template>

<script>
export default {
  mounted() {
    // Starting time
    this.$store.dispatch('start');

    // Test stopping time
    setTimeout(() => {
      this.$store.commit('switch', false);
    }, 3000);

    // Test re-starting time
    setTimeout(() => {
      this.$store.dispatch('start');
    }, 6000);
  },
};
</script>
