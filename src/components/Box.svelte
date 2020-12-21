<script>
  export let px = 'init';
  export let py = 'init';
  export let pt = 'init';
  export let pr = 'init';
  export let pb = 'init';
  export let pl = 'init';

  export let mx = 'init';
  export let my = 'init';
  export let mt = 'init';
  export let mr = 'init';
  export let mb = 'init';
  export let ml = 'init';

  export let textRed = false;
  export let textXs = false;
  export let italic = false;

  export let h = 'auto';
  export let relative = false;
  export let hFull = false;

  let classes = $$props.class || '';
</script>

<!-- just a helper to use with svelte:component -->
<div
  class:relative
  class:text-red="{textRed}"
  class:text-xs="{textXs}"
  class:italic
  class:h-full="{hFull}"
  class="{classes} pt-{pt} pr-{pr} pb-{pb} pl-{pl} px-{px} py-{py} mx-{mx} my-{my}
  mt-{mt} mr-{mr} mb-{mb} ml-{ml} h-{h}"
>
  <slot />
</div>
