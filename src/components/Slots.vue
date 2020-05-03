<template>
  <div>
    <div v-for="(slot, index) in $store.state.slots" :key="index">
      slot
    </div>
  </div>
</template>
