<template>
  <span>
  <svg class="icon icon-pause" style="display: inline-block;
  width: 1em; height: 1em; stroke-width: 0; stroke: currentColor;
  fill: currentColor;"><use xlink:href="#icon-pause"></use></svg>
  <symbol id="icon-pause" viewBox="0 0 24 24">
  <path :d="pausePath"></path>
  </symbol>
  </span>
</template>

<script>
export default {
  data: () => ({
    pausePath: 'M6 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM7 5h2v14h-2zM14 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM15 5h2v14h-2z',
  }),
};
</script>
