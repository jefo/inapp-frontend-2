<style>
  .list-item {
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-item:hover,
  .list-item:focus {
    background-color: var(--color-secondary);
    color: #fff;
    text-decoration: underline;
  }

  .list-item .text-box {
    @apply inline-block flex-1 px-12 py-6 whitespace-no-wrap text-sm-1;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let href = null;
  export let title = '';
  export let px = 'init';
</script>

<li class="list-item px-{px}" on:click="{() => dispatch('click')}">
  {#if href}
    <a class="text-box" {href} {title}>
      <slot />
    </a>
  {:else}
    <div class="text-box">
      <slot />
    </div>
  {/if}
</li>
