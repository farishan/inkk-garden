<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <Time />
    <Slots />
  </div>
</template>

<script>
// @ is an alias to /src
import Time from '@/components/Time.vue';
import Slots from '@/components/Slots.vue';

export default {
  name: 'Home',
  components: {
    Time,
    Slots,
  },
};
</script>
