<style>
  .data-grid :global(.grid-cell.header) {
    row-gap: 5px;
    height: 40px;
  }

  .data-grid :global(.grid-cell:not(.header)) {
    background-color: #f6f8fc;
  }

  .data-grid-inner {
    display: grid;
    row-gap: 5px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Cell from './Cell.svelte';
  import Row from './Row.svelte';
  import HeaderRow from './HeaderRow.svelte';
  import Divider from '../Divider.svelte';

  export const rows = [];
  export const columns = [];
  export let columnsTemplate = '';

  $: console.log(columnsTemplate);
</script>

<div class="relative data-grid">
  <div
    class="data-grid-inner mb-8"
    style="grid-template-columns: {columnsTemplate}"
  >
    <slot />
  </div>
  <Divider size="2px" />
</div>
