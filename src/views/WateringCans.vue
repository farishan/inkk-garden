<template>
  <div class="raw">
    <h3>Raw Database</h3>
    <div v-for="(data, index) in $store.state.watering.cans" :key="index">
      <h4>{{data.name}}</h4>
      <img :src="`/images/${data.image}`">
      <pre>
        {{ JSON.stringify(data, null, 2) }}
      </pre>
    </div>
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
