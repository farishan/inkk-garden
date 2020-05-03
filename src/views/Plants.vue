<template>
  <div class="raw overflow-y-auto text-left p-4 mx-auto">
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
    max-width: 400px;
    max-height: 500px;
  }
</style>
