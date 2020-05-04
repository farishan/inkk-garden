<template>
  <div>
    <p>collector:</p>
    <!-- <pre>
     {{ $store.state.sprinkler }}
    </pre> -->
    <button
      class="border"
      :class="$store.state.collector.on ? 'border-gray-600' : ''"
      @click="$store.commit('collector/switch', !$store.state.collector.on)"
    >
      <img
        src="/images/cookie_imp_eating.png"
        alt="collector"
        v-if="$store.state.collector.on"
      >
      <img
        src="/images/cookie_imp.png"
        alt="collector"
        v-if="!$store.state.collector.on"
      >
    </button>
  </div>
</template>
