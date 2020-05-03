<template>
  <div>
    <div v-for="(slot, index) in $store.state.garden.slots" :key="index">
      {{ slot === null ? 'slot' : slot.name }}
    </div>
  </div>
</template>
