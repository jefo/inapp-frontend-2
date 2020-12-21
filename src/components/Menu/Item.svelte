<style>
  .menu-item {
    transition: background-color 0.2s ease-in;
  }

  .active {
    background-color: var(--color-primary);
    color: #fff;
    transition-timing-function: ease-out;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  export let href = null;
  export let title = null;
  export let active = false;

  const dispatch = createEventDispatcher();

  // native click event has div as a target so we can not access href property
  const handleNav = (e) => {
    e.preventDefault();
    dispatch('nav', href);
  };

  const classes =
    'menu-item pl-19 h-20 flex items-center text-base-1 hover:underline';
</script>

{#if href}
  <a class="{classes}" on:click="{handleNav}" class:active {href} {title}>
    <slot />
  </a>
{:else}
  <div class="{classes}" on:click="{handleNav}" class:active>
    <slot />
  </div>
{/if}
