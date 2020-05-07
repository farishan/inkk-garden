<template>
  <div>
    <div class="w-2/3 mx-auto" style="padding-top: 10px">
      <!-- PLANTS -->
      <div class="border border-gray-600 rounded shadow p-2 mb-3">
        <div
          class="shop-items"
          style="max-height: 370px;"
        >
          <div
            v-for="(plant, index) in $store.state.plants.data"
            :key="index"
            class="w-1/4 px-1 mb-2"
          >
            <div class="shop-item">
              <h4 class="shop-item__name">{{plant.name}}</h4>
              <img draggable="false" class="shop-item__image" :src="`/images/${plant.imageSeed}`">
              <div class="shop-item__price-wrapper">
                <p class="shop-item__price">{{ plant.price }}</p>
                <Cookie />
              </div>
              <button
                class="shop-item__button"
                @click="buyPlant(plant)"
              >
                buy
              </button>
              <!-- <pre>
                {{ JSON.stringify(plant, null, 2) }}
              </pre> -->
            </div>
          </div>
        </div>
      </div>

      <!-- OTHERS -->
      <div class="border border-gray-600 rounded shadow p-2">
        <div class="flex flex-wrap -mx-1 overflow-y-auto">
          <!-- watering cans -->
          <div class="w-1/3 px-1 flex">
            <div
              v-for="(data, index) in $store.state.watering.cans.filter(c => c.buyable)"
              :key="index"
              class="w-full"
            >
              <div class="shop-item">
                <h4 class="shop-item__name">{{data.name}}</h4>
                <img class="shop-item__image" :src="`/images/${data.image}`">
                <div class="shop-item__price-wrapper">
                  <p class="shop-item__price">{{ data.price }}</p>
                  <Cookie />
                </div>
                <button
                  class="shop-item__button"
                  @click="buyWateringCan(data)"
                >
                  buy
                </button>
                <!-- <pre>
                  {{ JSON.stringify(data, null, 2) }}
                </pre> -->
              </div>
            </div>
          </div>

          <!-- sprinkler -->
          <div class="w-1/3 px-1">
            <div class="shop-item">
              <h4 class="shop-item__name">Sprinkkler</h4>
              <img
                src="/images/water_sprinkler.png"
                alt="sprinkler"
                class="shop-item__image"
              >
              <div class="shop-item__price-wrapper">
                <p class="shop-item__price">10000</p>
                <Cookie />
              </div>
              <button
                class="shop-item__button"
                @click="$store.dispatch('buySprinkler', 10000)"
              >
                buy
              </button>
            </div>
          </div>

          <!-- collector -->
          <div class="w-1/3 px-1">
            <div class="shop-item">
              <h4 class="shop-item__name">Ku' Chippi</h4>
              <img
                src="/images/cookie_imp.png"
                alt="collector"
                class="shop-item__image"
              >
              <div class="shop-item__price-wrapper">
                <p class="shop-item__price">10000</p>
                <Cookie />
              </div>
              <button
                class="shop-item__button"
                @click="$store.dispatch('buyCollector', 10000)"
              >
                buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from '@/components/icons/Cookie.vue';

export default {
  components: {
    Cookie,
  },
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

<style scoped>
  .shop-items {
    @apply flex flex-wrap -mx-1 overflow-y-auto;
  }

  /* .shop-items::-webkit-scrollbar {
    display: none;
    visibility: hidden;
    width: 0px;
    margin-right: -10px;
  } */

  .shop-item {
    @apply border rounded border-gray-600 p-2;
  }

  .shop-item__name {
    @apply text-sm font-bold mb-3;
  }

  .shop-item__image {
    @apply mx-auto mb-3;
  }

  .shop-item__price-wrapper {
    @apply flex items-center justify-center mb-2;
  }

  .shop-item__price {
    @apply text-xs mr-1;
  }

  .shop-item__button {
    @apply border border-gray-400 rounded-lg px-2 text-sm tracking-wider;
  }
</style>
