<template>
  <span>
  <svg class="icon icon-play" style="display: inline-block;
  width: 1em; height: 1em; stroke-width: 0; stroke: currentColor;
  fill: currentColor;"><use xlink:href="#icon-play"></use></svg>
  <symbol id="icon-play" viewBox="0 0 24 24">
  <path :d="playPath"></path>
  </symbol>
  </span>
</template>

<script>
export default {
  data: () => ({
    playPath: 'M5.541 2.159c-0.153-0.1-0.34-0.159-0.541-0.159-0.552 0-1 0.448-1 1v18c-0.001 0.182 0.050 0.372 0.159 0.541 0.299 0.465 0.917 0.599 1.382 0.3l14-9c0.114-0.072 0.219-0.174 0.3-0.3 0.299-0.465 0.164-1.083-0.3-1.382zM6 4.832l11.151 7.168-11.151 7.168z',
  }),
};
</script>
