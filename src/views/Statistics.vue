<template>
  <div class="p-2">
    statistics

    <pre>
    {{JSON.stringify(statistics, null, 2)}}
    </pre>
    total time played: {{totalTimePlayed}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      totalTimePlayed: null,
    };
  },
  computed: {
    statistics() {
      return this.$store.state.statistics;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      // get total seconds between the times
      const datePast = new Date(this.$store.state.statistics.startedAt);
      const dateNow = new Date();
      let delta = Math.abs(datePast - dateNow) / 1000;

      // calculate (and subtract) whole days
      const days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      const hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      const minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      const seconds = Math.floor(delta % 60); // in theory the modulus is not required
      this.totalTimePlayed = `${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>
