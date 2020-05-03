<template>
  <div class="bg-white absolute border p-2 z-20 shadow shadow-lg" style="top: 100%;" v-if="show">
    {{data.name}}<br>
    water: {{data.water}}<br>
    progress: {{data.progress}}<br>
    stage: {{data.stage}}<br>
    ready: {{data.ready}}<br>
    cookiehealth: {{data.cookie_health}}<br>
    health: {{data.health}}
    <!-- <div class="pt-2">
      <button class="bg-gray-300 w-full text-center" @click="sell($event)">sell</button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    show: Boolean,
  },
  methods: {
    sell(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
};
</script>
