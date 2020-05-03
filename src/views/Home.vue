<template>
  <div class="home">
    <img class="mx-auto" alt="Vue logo" src="/images/logo.png">
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
