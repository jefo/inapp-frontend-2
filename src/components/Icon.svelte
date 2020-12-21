<script>
  import InlineSVG from './InlineSvg.svelte';
  import { createEventDispatcher } from 'svelte';

  export let name = '';
  export let size = '20px';
  export let width = size;
  export let height = size;
  export let fill = null;
  export let stopPropagation = false;
  export let color = null;
  export let stroke = null;
  export let inlineBlock = true;
  export let className = '';
  export let el = null;
  let src;
  let attributes;
  $: src = '/icons/' + name + '.svg';

  $: {
    attributes = {
      width: width,
      height: height,
    };

    if (fill) {
      attributes.fill = fill;
    }

    if (color) {
      attributes.color = color;
    }

    if (stroke) {
      attributes.stroke = stroke;
    }
  }

  const dispatch = createEventDispatcher();

  const handleClick = e => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    dispatch('click');
  };
</script>

<span
  bind:this={el}
  class:inline-block="{inlineBlock}"
  class="{name}"
  on:click="{handleClick}"
  on:mouseup|preventDefault|stopPropagation
  on:mousedown|preventDefault|stopPropagation
>
  <InlineSVG {src} {...attributes} />
</span>
