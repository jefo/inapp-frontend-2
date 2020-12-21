<style>
  .menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7f8fc;
    min-height: 40px;
    transition: background-color .2s ease-in;
  }

  .menu-title:not(:first-child) {
    border-top: 1px solid #e2e8f1;
  }

  .title-text {
    color: #0e1821;
    letter-spacing: 3px;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
  }

  .active {
    background-color: #10bf8b;
    transition-timing-function: ease-out;
  }

  .active .title-text {
    color: #fff;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import IconButton from '@/components/IconButton.svelte';
  export let collapsible = false;
  export let collapsed = false;
  export let active = false;
  export let href = null;

  const dispatch = createEventDispatcher();

  // native click event has div as a target so we can not access href property
  const handleNav = (e) => {
    e.preventDefault();
    dispatch('nav', href);
    dispatch('click', e);
  }
</script>

<a
  {href}
  class="menu-title"
  on:click={handleNav}
  class:active
  class:cursor-pointer="{collapsible}"
>
  <div class="pl-14 title-text flex-1">
    <slot />
  </div>
  {#if collapsible}
    <div class="flex-initial flex justify-center items-center pr-9">
      {#if collapsed}
        <IconButton iconProps="{{ size: '12px' }}" icon="plus" />
      {:else}
        <IconButton iconProps="{{ size: '12px' }}" icon="minus" />
      {/if}
    </div>
  {/if}
</a>
