<script>
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  export let trigger = null;
  export let visible = false;
  export let disabled = false;
  export let absolute = false;
  export let direction = 'down';
  export let top = 'auto';
  export let left = 'auto';
  export let right = 'auto';
  export let transitionDuration = 250;
  export let fullWidth = false;

  let el = null;
  let eventListened = false;
  let className = $$props.class || '';

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
      eventListened = true;
    }
  }

  function hideDropdown() {
    visible = false;
  }

  function toggle(e) {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    visible = !visible;
  }

  $: {
    if (el && direction === 'up') {
      top = -el.offsetHeight;
    }
  }
</script>

{#if visible}
  <div
    class:absolute
    bind:this="{el}"
    class:min-w-full={fullWidth}
    class="{className}"
    style="top: {top}; left: {left}; right: {right}; z-index: 9999;"
    class:direction
    on:click|stopPropagation
    transition:fly|local="{{ duration: transitionDuration }}"
  >
    <slot />
  </div>
{/if}
