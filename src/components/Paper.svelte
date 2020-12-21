<style>
  .paper {
    background-color: #f3f6ff;
  }

  .paper.lighter {
    background-color: #f8faff;
  }

  .paper.white {
    background-color: #fff;
  }

  :not(.white) .top-shadow {
    height: 44px;
    background: linear-gradient(
      180deg,
      #dde1ec 0%,
      rgba(241, 245, 255, 0) 100%
    );
    opacity: 0.5;
    top: 0;
    width: 100%;
  }
</style>

<script>
  export let lighter = false;
  export let px = 'init';
  export let py = 'init';
  export let pt = 'init';
  export let pr = 'init';
  export let pb = 'init';
  export let pl = 'init';
  export let mb = 'init';
  export let hFull = false;
</script>

<div
  class:lighter
  class:h-full={hFull}
  class="paper relative px-{px} py-{py} pt-{pt} pr-{pr} pb-{pb} pl-{pl} mb-{mb}"
>
  {#if !lighter}
    <div class="absolute top-shadow"></div>
  {/if}
  <slot />
</div>
