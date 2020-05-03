<template>
  <div class="border relative">

    <div class="plant" v-if="data === null">
      null
    </div>

    <div
      v-if="data !== null"
      class="plant"
      :style="{backgroundImage: `url('/images/plants/${data.image}')`}"
    >
      {{ data.name }}
      <bar
        :width="progressWidth"
        :classes="'bg-green-400'"
        :customStyle="{bottom: '3px'}"
      />
      <bar
        :width="waterWidth"
        :classes="'bg-blue-400 bottom-0'"
      />
      <bar
        :width="cookieWidth"
        :classes="'bg-black top-0'"
        v-show="data.ready"
      />
      <bar
        :width="healthWidth"
        :classes="'bg-red-400 top-0'"
        v-show="data.dry"
      />
    </div>
  </div>
</template>

<script>
import Bar from './Bar.vue';

export default {
  components: {
    Bar,
  },
  props: {
    data: Object,
  },
  computed: {
    progressWidth() {
      const param = this.data.progress;
      const param1 = 100;
      return this.calc(param, param1);
    },
    waterWidth() {
      const param = this.data.water;
      const param1 = this.data.waterCapacity;
      return this.calc(param, param1);
    },
    cookieWidth() {
      const param = this.data.cookieHealth;
      const param1 = this.data.defaultCookieHealth;
      return this.calc(param, param1);
    },
    healthWidth() {
      const param = this.data.health;
      const param1 = this.data.defaultHealth;
      return this.calc(param, param1);
    },
  },
  methods: {
    // Calculate bar width
    calc(param, param1) {
      const calc = param ? param / param1 : 0;
      return calc > 0 ? calc : 0;
    },
  },
};
</script>

<style scoped>
  .plant {
    animation: animate 1s steps(4) infinite;
    width: 70px;
    height: 70px;
  }

  @keyframes animate {
    from {background-position: 0 0;}
    to {background-position: -280px 0}
  }
</style>
