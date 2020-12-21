<style>
  .arrow-box {
    right: 15px;
  }

  .desc {
    transform: rotate(180deg);
  }
</style>

<script>
  import Cell from './Cell.svelte';
  import IconButton from '@/components/IconButton.svelte';

  export let sortable = false;
  export let direction = 'desc';
  export let align = 'center';
  export let pt = 0;
  export let pr = 0;
  export let pb = 0;
  export let pl = 0;
  export let mr = 0;
  export let mb = 0;
</script>

<Cell on:click clickable="{sortable}" header {pt} {pr} {pb} {pl} {mr} {mb} {align}>
  <slot />
  {#if sortable}
    <div class="absolute arrow-box" class:desc="{direction === 'desc'}">
      <IconButton stopPropagation="{false}" icon="arrow-down" iconProps="{{ size: '8px' }}" />
    </div>
  {/if}
</Cell>
