<style>
  .card-root {
    transition: max-height .3s ease-in-out;
  }
</style>
<script>
  import Box from '../Box.svelte';
  import CardHeader from './Header.svelte';

  export let title = '';
  export let component = Box;
</script>

<div class="bg-white rounded card-root">
  <svelte:component
    this="{component}"
    name="{$$props.name}"
    onSubmit="{$$props.onSubmit}"
  >
    {#if title}
      <CardHeader>{title}</CardHeader>
    {/if}
    <slot />
  </svelte:component>
</div>
