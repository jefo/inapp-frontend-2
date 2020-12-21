<script>
  import { createEventDispatcher } from 'svelte';
  export let onSubmit;
  export let name;

  const dispatch = createEventDispatcher();

  function handleSubmit(e) {
    dispatch('submit');
    // in case for use with wrapper-dynamic-components like @/components/Card
    if (onSubmit) {
      onSubmit(e);
    }
  }
</script>

<form {name} data-testid="{name}" on:submit|preventDefault="{handleSubmit}">
  <slot />
</form>
