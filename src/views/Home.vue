<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Time />
  </div>
</template>

<script>
// @ is an alias to /src
import Time from '@/components/Time.vue';

export default {
  name: 'Home',
  components: {
    Time,
  },
};
</script>
