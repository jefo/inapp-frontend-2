<script>
  import Box from './Box.svelte';
</script>

<Box textRed textXs italic {...$$props}>
  <slot />
</Box>
