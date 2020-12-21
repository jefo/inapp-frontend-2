<style>
  .icon-button {
    border: none;
    transition: background-color 0.1s ease-in-out;
  }

  .icon-button:active,
  .icon-button:focus {
    outline: none;
  }

  :global(.selected .file-icon .label) {
    color: #fff;
  }

  .disabled {
    opacity: 0.7;
    cursor: default;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  export let icon = '';
  export let px = 'init';
  export let py = 'init';
  export let pt = 'init';
  export let pr = 'init';
  export let pb = 'init';
  export let pl = 'init';
  export let stretch = false;
  export let el = null;
  export let value = '';
  export let stopPropagation = true;
  export let preventDefault = false;
  export let selected = false;
  export let disabled = false;
  export let iconProps = {};

  const dispatch = createEventDispatcher();

  const handleClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    if (preventDefault) {
      e.preventDefault();
    }
    dispatch('click');
  };
</script>

<button
  bind:this="{el}"
  {value}
  {disabled}
  on:click="{handleClick}"
  class:selected
  class:disabled
  class:h-full="{stretch}"
  class:w-full="{stretch}"
  class="control inline-flex items-center justify-center icon-button px-{px} py-{py}
  pt-{pt} pr-{pr} pb-{pb} pl-{pl}
  {value}"
>
  <slot>
    <Icon name="{icon}" {...iconProps} />
  </slot>
</button>
