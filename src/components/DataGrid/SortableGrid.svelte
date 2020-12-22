<script>
  import { createEventDispatcher } from 'svelte';
  import Grid from './Grid.svelte';
  import HeaderCell from './HeaderCell.svelte';

  export let order = [];
  export let columns = [
    { name: '' }
  ];
  export let gridProps = {};

  let innerOrder = {};
  $: innerOrder = order.reduce((acc, next) => {
    acc[next.by] = next.direction;
    return acc;
  }, {});

  const dispatch = createEventDispatcher();

  const handleSort = (cell) => {
    const currentSort = innerOrder[cell.prop] || cell.sortDir;
    innerOrder[cell.prop] = currentSort === 'asc' ? 'desc' : 'asc';
    const order = Object.keys(innerOrder).map((key) => ({
      by: key,
      direction: innerOrder[key],
    }));
    dispatch('sort', order);
  };
</script>
<Grid {...gridProps}>
  {#each columns as cell}
    <HeaderCell
      {...cell}
      direction="{innerOrder[cell.prop]}"
      on:click="{() => handleSort(cell)}"
    >
      {cell.label}
    </HeaderCell>
    {/each}
    <slot />
</Grid>
