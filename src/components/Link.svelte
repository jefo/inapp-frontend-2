<script>
  import { createEventDispatcher } from 'svelte';
  export let href;
  export let underline = false;
  export let target;
  export let button = false;

  const dispatch = createEventDispatcher();

  const handleClick = (e) => {
    if (button) {
      e.preventDefault();
    }
    dispatch('click');
  };
</script>

<a
  {href}
  {target}
  on:click|stopPropagation="{handleClick}"
  class:underline
  class:cursor-pointer="{button}"
  class="text-primary hover:text-primary-lighter"
>
  <slot />
</a>
