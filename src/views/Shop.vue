<template>
  <div>
    <!-- PLANTS -->
    <div class="flex flex-wrap w-2/3 mx-auto">
      <div
        v-for="(plant, index) in $store.state.plants.data"
        :key="index"
        class="w-1/4"
      >
        <div class="border">
          <h4 class="text-sm font-bold">{{plant.name}}</h4>
          <img class="mx-auto" :src="`/images/${plant.imageSeed}`">
          <p class="text-xs">{{ plant.price }}</p>
          <button class="border rounded-lg px-2" @click="buyPlant(plant)">buy</button>
          <!-- <pre>
            {{ JSON.stringify(plant, null, 2) }}
          </pre> -->
        </div>
      </div>
    </div>

    <!-- OTHERS -->
    <div class="flex w-2/3 mx-auto justify-center">
      <!-- watering cans -->
      <div class="flex">
        <div v-for="(data, index) in $store.state.watering.cans" :key="index">
          <div class="border">
            <h4>{{data.name}}</h4>
            <img :src="`/images/${data.image}`">
            <p class="text-xs">{{data.price}}</p>
            <button class="border rounded-lg px-2" @click="buyWateringCan(data)">buy</button>
            <!-- <pre>
              {{ JSON.stringify(data, null, 2) }}
            </pre> -->
          </div>
        </div>
      </div>

      <!-- sprinkler -->
      <div>
        <div class="border">
          <h4>Sprinkkler</h4>
          <img
            src="/images/water_sprinkler.png"
            alt="sprinkler"
          >
          <p class="text-xs">10000</p>
          <button class="border rounded-lg px-2">buy</button>
        </div>
      </div>
      <div>
        <div class="border">
          <h4>Ku' Chippi</h4>
          <img
            src="/images/cookie_imp.png"
            alt="collector"
          >
          <p class="text-xs">10000</p>
          <button class="border rounded-lg px-2">buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buyPlant(plant) {
      this.$store.dispatch('buyPlant', plant);
    },
    buyWateringCan(can) {
      this.$store.dispatch('buyWateringCan', can);
    },
  },
};
</script>
