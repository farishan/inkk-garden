<template>
  <div>
    <div class="flex flex-wrap w-2/3 mx-auto">
      <div
        v-for="(plant, index) in $store.state.plants.data"
        :key="index"
        class="w-1/4"
      >
        <div class="border">
          <h4>{{plant.name}}</h4>
          <img class="mx-auto" :src="`/images/${plant.imageSeed}`">
          <p>{{ plant.price }}</p>
          <button class="border rounded-lg px-2">buy</button>
          <!-- <pre>
            {{ JSON.stringify(plant, null, 2) }}
          </pre> -->
        </div>
      </div>
    </div>
  </div>
</template>
