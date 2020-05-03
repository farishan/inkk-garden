<template>
  <div>
    <button @click="addPlant">add plant</button>
    <button @click="addWateringCan">add watering can</button>

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
  },
};
</script>
