<template>
  <div class="raw">
    <h3>Raw Database</h3>
    <pre>
      {{ JSON.stringify($store.state.plants, null, 2) }}
    </pre>
  </div>
</template>

<style scoped>
  .raw {
    text-align: left;
    max-width: 300px;
    max-height: 600px;
    overflow-y: auto;
  }
</style>
