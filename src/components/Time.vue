<template>
  <div>
    <p>Time:</p>
    <pre>
    {{ JSON.stringify(this.$store.state.time, null, 2) }}
    {{ this.$store.getters.period }}
    </pre>
  </div>
</template>
