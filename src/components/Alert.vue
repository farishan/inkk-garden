<template>
  <div class="fixed" style="top: 10px; right: 10px;">
    <div :class="classes" v-show="$store.state.alert.show">
      {{ $store.state.alert.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: 'bg-black text-white font-bold border rounded border-gray-600 z-50 shadow shadow-lg py-2 px-4',
    };
  },
};
</script>
