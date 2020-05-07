<template>
  <div
    class="w-2/3 mx-auto p-2 border border-gray-600 text-left rounded shadow text-sm"
    style="margin-top: 10px"
  >
    <table>
      <tbody>
        <tr>
          <td>Total Time Played</td>
          <td>:</td>
          <td>{{ totalTimePlayed }}</td>
        </tr>
        <tr v-for="(k, index) in Object.keys(statistics)" :key="index">
          <td>
            {{ k | normalizeCamelCase }}
          </td>
          <td>:</td>
          <td>
            <span v-if="k === 'startedAt' || k === 'lastSavedAt'">
              {{ statistics[k] | dateFormat }}
            </span>
            <span v-else>{{ statistics[k] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
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
  filters: {
    normalizeCamelCase(val) {
      return val
        // insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, (str) => str.toUpperCase());
    },
    dateFormat(val) {
      if (val && val !== '') {
        return new Date(val).toLocaleString();
      }
      return '-';
    },
  },
};
</script>
