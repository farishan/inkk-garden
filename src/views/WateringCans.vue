<template>
  <div class="raw overflow-y-auto text-left p-4 mx-auto">
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
    max-width: 400px;
    max-height: 500px;
  }
</style>
