<template>
  <div>
    <p>sprinkler:</p>
    <!-- <pre>
     {{ $store.state.sprinkler }}
    </pre> -->
    <button
      class="border"
      :class="$store.state.sprinkler.on ? 'border-gray-600' : ''"
      @click="$store.commit('sprinkler/switch', !$store.state.sprinkler.on)"
    >
      <img
        src="/images/water_sprinkler.png"
        alt="sprinkler"
        v-if="$store.state.sprinkler.on"
      >
      <img
        src="/images/water_sprinkler_off.png"
        alt="sprinkler"
        v-if="!$store.state.sprinkler.on"
      >
    </button>
  </div>
</template>
