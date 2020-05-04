<template>
  <div
    class="bg-white absolute border p-2 z-20 shadow shadow-lg transition duration-200 text-xs"
    :class="hover ? 'opacity-100' : 'opacity-25'"
    style="top: 100%;"
    v-if="show"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    {{data.name}}<br>
    water: {{data.water}}<br>
    progress: {{data.progress}}<br>
    stage: {{data.stage}}<br>
    ready: {{data.ready}}<br>
    cookiehealth: {{data.cookie_health}}<br>
    health: {{data.health}}
    <div class="pt-2">
      <button class="bg-gray-300 w-full text-center" @click="sell">sell</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    show: Boolean,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    sell(e) {
      e.preventDefault();
      e.stopPropagation();

      this.$store.dispatch('sellPlant', this.data);
    },
  },
};
</script>
