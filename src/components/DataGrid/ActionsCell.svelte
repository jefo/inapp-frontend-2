<style>
  .actions-cell :global(.button),
  .actions-cell :global(.icon-button) {
    height: 36px;
  }
</style>

<script>
  import Cell from './Cell.svelte';
</script>
<div class="actions-cell">
  <Cell {...$$props}>
    <slot />
  </Cell>
</div>
