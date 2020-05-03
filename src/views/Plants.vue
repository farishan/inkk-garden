<template>
  <div class="raw">
    <h3>Raw Database</h3>
    <div v-for="(plant, index) in $store.state.plants.data" :key="index">
      <h4>{{plant.name}}</h4>
      <img :src="`/images/plants/${plant.image}`">
      <pre>
        {{ JSON.stringify(plant, null, 2) }}
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
