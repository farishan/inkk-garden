<template>
  <div>
    <pre>
    {{ JSON.stringify($store.state.player, null, 2) }}
    </pre>

    <button @click="addPlant">add plant</button>
  </div>
</template>

<script>
export default {
  methods: {
    addPlant() {
      this.$store.dispatch('addPlant', 1);
    },
  },
};
</script>
