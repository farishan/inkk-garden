<template>
  <div>
    <button class="border px-2" @click="addPlant">add plant</button>
    <button class="border px-2" @click="addWateringCan">add watering can</button>
    <button class="border px-2" @click="addCookies(10)">add 10 cookies</button>
    <button class="border px-2" @click="addCookies(10000)">add 10000 cookies</button>
    <button class="border px-2" @click="addCookies(100000000)">add 100.000.000 cookies</button>

    <pre>
    {{ JSON.stringify($store.state.player, null, 2) }}
    </pre>
  </div>
</template>

<script>
export default {
  methods: {
    addPlant() {
      this.$store.dispatch('player/addPlant', 1);
    },
    addWateringCan() {
      this.$store.dispatch('player/addWateringCan', 1);
      this.$store.dispatch('player/addWateringCan', 2);
    },
    addCookies(amount) {
      this.$store.commit('player/addCookies', amount);
    },
  },
};
</script>
