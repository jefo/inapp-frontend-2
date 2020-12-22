<style>
  .icon-button {
    transition: background-color 0.1s ease-in-out;
    border: 1px solid var(--color-tetriary-darken);
    border-radius: 4px;
    background-color: var(--color-tetriary-lighter2);
    transition: background-color 0.1s ease-in-out;
    transition: border-color 0.1s ease-in-out;
  }

  .icon-button:active {
    background-color: #ebedf7;
    border-color: var(--default-border);
  }

  .icon-button.size-xs {
    height: 35px;
    min-width: 35px;
  }

  .icon-button.icon-only {
    border: none;
    background-color: transparent;
  }

  .icon-button:active,
  .icon-button:focus {
    outline: none;
  }

  .icon-button :global(.selected .file-icon .label) {
    color: #fff;
  }

  .disabled {
    opacity: 0.7;
    cursor: default;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import cn from 'classnames';
  import Icon from './Icon.svelte';

  export let icon = '';
  export let px = '';
  export let py = '';
  export let pt = '';
  export let pr = '';
  export let pb = '';
  export let pl = '';
  export let stretch = false;
  export let el = null;
  export let value = '';
  export let stopPropagation = true;
  export let preventDefault = false;
  export let selected = false;
  export let disabled = false;
  export let iconProps = {};
  export let flat = false;
  export let size = 'xs'

  const classNames = cn({
    [`px-${px}`]: px,
    [`py-${py}`]: py,
    [`pt-${pt}`]: pt,
    [`pr-${pr}`]: pr,
    [`pb-${pb}`]: pb,
    [`pl-${pl}`]: pl,
  });

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
  class:icon-only={flat}
  class:h-full="{stretch}"
  class:w-full="{stretch}"
  class:size-xs={size === 'xs'}
  class="control icon-button inline-flex items-center justify-center {classNames}"
>
  <slot>
    <Icon name="{icon}" {...iconProps} />
  </slot>
</button>
