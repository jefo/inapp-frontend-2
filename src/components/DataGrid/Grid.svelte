<style>
  .data-grid {
    display: grid;
  }

  .data-grid-box {
    position: relative;
  }

  .data-grid.simple {
    row-gap: 5px;
  }

  .data-grid.simple :global(.grid-cell.header) {
    row-gap: 5px;
    height: 40px;
  }

  .data-grid.simple :global(.grid-cell:not(.header)) {
    background-color: #f6f8fc;
    min-height: 50px;
  }

  .data-grid.zebra :global(.row:nth-child(odd) .grid-cell:not(.header)) {
    background-color: #f9fbff;
  }

  .data-grid-box :global(.page-list) {
    margin-top: 37px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Divider from '@/components/IconButton.svelte';
  import ErrorOverlay from '@/components/ErrorOverlay.svelte';
  import Cell from './Cell.svelte';
  import Row from './Row.svelte';
  import HeaderRow from './HeaderRow.svelte';
  import PageList from 'reports/components/Pagination/List.svelte';

  export const rows = [];
  export const columns = [];
  export let totalRows = rows.length;
  export let rowsPerPage = rows.length;
  export let page = 1;
  export let columnsTemplate = null;
  export let loading = false;
  export let error = '';
  export let gridContainerHeight = '300px';
  export let mb = 11;
  export let simple = false;
  let zebra = true;
  zebra = !simple;
  const dispatch = createEventDispatcher();

  const handlePageChange = () => {
    dispatch('page', page);
  };
</script>

<div class="relative data-grid-box" style="min-height: {gridContainerHeight};">
  {#if error}
    <ErrorOverlay />
  {/if}
  <div
    class:zebra
    class:simple
    class="data-grid mb-{mb}"
    style="grid-template-columns: {columnsTemplate}"
  >
    <slot>
      <HeaderRow>
        {#each columns as column}
          <Cell>{column.value}</Cell>
        {/each}
      </HeaderRow>
      {#each rows as row}
        <Row>
          {#each row as cell}
            {#if cell.component}
              <svelte:component this="{cell.component}" {...cell.props} />
            {:else}
              <Cell>{cell.format ? cell.format(cell.value) : cell.value}</Cell>
            {/if}
          {/each}
        </Row>
      {/each}
    </slot>
  </div>
  <Divider size="2px" />
</div>
{#if rowsPerPage < totalRows}
  <div class="mt-10">
    <PageList
      disabled="{loading}"
      bind:currentPage="{page}"
      on:page="{handlePageChange}"
      total="{totalRows}"
    />
  </div>
{/if}
