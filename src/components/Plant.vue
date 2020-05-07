<template>
  <div
    v-if="data && data !== null"
    class="plant w-full h-full"
    :style="{backgroundImage: `url('/images/plants/${image}')`}"
    @click="handleClick"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    draggable
    @dragstart="startDrag"
  >
    <!-- <span v-if="!data.ready && !data.dry" class="absolute text-xs top-0 left-0">
      {{data.name}}
      <span v-if="data.stage===0"> Seed</span>
      <span v-if="data.stage===1"> Bud</span>
    </span> -->

    <p v-show="data.dry" class="water-alert">need<br>water</p>

    <span v-show="data.ready">
      <button
        class="collect-button"
        @click="collect($event)"
      >
        collect
      </button>
    </span>

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

    <tooltip :data="data" v-show="showTooltip" />
  </div>
</template>

<script>
import Bar from './Bar.vue';
import Tooltip from './Tooltip.vue';

export default {
  components: {
    Bar,
    Tooltip,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      hover: false,
      showTooltip: false,
    };
  },
  computed: {
    image() {
      let image = 'seed.png';

      if (this.data.stage === 1) {
        image = this.data.imageBud;
      } else if (this.data.stage === 2) {
        image = this.data.image;
      }

      return image;
    },
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
    collect(e) {
      // selectingAction = false; player.manual_collect++
      e.preventDefault();
      e.stopPropagation();
      this.$store.dispatch('player/collect', this.data);
    },
    handleClick() {
      if (this.$store.state.watering.active) {
        this.$store.dispatch('player/hydrate', this.data);
      }
    },
    startDrag(e) {
      this.hover = false;
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemID', this.data.id);
      e.dataTransfer.setData('itemPosition', this.data.position);
    },
  },
  watch: {
    hover(val) {
      setTimeout(() => {
        if (this.hover) {
          this.showTooltip = true;
        } else {
          this.showTooltip = false;
        }
      }, 1000);

      if (val === false) {
        this.showTooltip = false;
      }
    },
  },
};
</script>

<style scoped>
  .plant {
    animation: animate 1s steps(4) infinite;
  }

  .water-alert {
    @apply absolute left-0 bottom-0 w-full text-left text-white font-bold tracking-wide;
    @apply pt-2 pb-1 pl-1 z-10 text-white text-sm leading-3 bg-blue-400;

    animation: blink 2s ease-in-out;
    animation-iteration-count: infinite;
    /* top: 50%; */
    /* transform: translateY(-50%); */
  }

  .collect-button {
    @apply absolute left-0 bottom-0 z-10 w-full;
    @apply bg-black text-white text-sm font-bold tracking-wider;
  }

  @keyframes animate {
    from {background-position: 0 0;}
    to {background-position: -280px 0}
  }

  @keyframes blink {
    0% {opacity: 1}
    25% {opacity: 1}
    50% {opacity: 0}
    75% {opacity: 1}
    100% {opacity: 1}
  }
</style>
