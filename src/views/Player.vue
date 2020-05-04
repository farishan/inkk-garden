<template>
  <div>
    <button class="border px-2" @click="addPlant">add plant</button>
    <button class="border px-2" @click="addWateringCan">add watering can</button>
    <button class="border px-2" @click="addCookies">add 10 cookies</button>

    <pre>
    {{ JSON.stringify($store.state.player, null, 2) }}
    </pre>
  </div>
</template>

<script>
export default {
  methods: {
    addPlant() {
      this.$store.dispatch('addPlant', 1);
    },
    addWateringCan() {
      this.$store.dispatch('addWateringCan', 1);
      this.$store.dispatch('addWateringCan', 2);
    },
    addCookies() {
      this.$store.commit('addCookies', 10);
    },
  },
};
</script>
