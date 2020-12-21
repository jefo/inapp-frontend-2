<style>
  /* eslint-disable css-unused-selector */
  .root {
    position: absolute;
    right: 0;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
</style>

<script>
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  export let trigger;
  export let top = 0;

  let visible = false;
  let eventListened = false;

  onMount(() => {
    document.addEventListener('click', hideDropdown);
  });

  onDestroy(() => {
    document.removeEventListener('click', hideDropdown);
    if (trigger) {
      trigger.removeEventListener('click', toggle);
    }
  });

  $: {
    if (!eventListened && trigger) {
      trigger.addEventListener('click', toggle);
    }
  }

  function hideDropdown() {
    visible = false;
  }

  function toggle() {
    visible = !visible;
  }
</script>

{#if visible}
  <ul
    on:click|stopPropagation
    class="root"
    transition:fly="{{ duration: 100 }}"
    style="top: {top}px"
  >
    <slot />
  </ul>
{/if}
