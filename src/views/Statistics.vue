<template>
  <div class="p-2">
    statistics

    <pre>
    {{JSON.stringify(statistics, null, 2)}}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: {
        totalTimePlayed: 0,
        totalCookies: 0,
        totalPlantsBought: 0,
        totalPlantsDied: 0,
        totalManualWatering: 0,
        plantsUnlocked: 0,
      },
    };
  },
};
</script>
