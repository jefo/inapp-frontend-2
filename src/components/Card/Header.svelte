<style>
  .card-header {
    border-bottom: 1px solid #dfe2f0;
  }
</style>

<script>
  export let px = 14;
  export let py = 9;
  export let pb = 'init';
  export let pt = 'init';
  export let backgroundColor = '#ffffff';
  export let flexWrap = true;
</script>

<div
  class:flex-wrap="{flexWrap}"
  class="card-header flex items-center justify-between py-{py} px-{px} pb-{pb} pt-{pt} border-b border-gray-a lg:border-none"
  style="background-color: {backgroundColor}"
>
  <h1 class="font-bold text-base-1 flex-initial">
    <slot />
  </h1>
  <div class="flex-initial">
    <slot name="control" />
  </div>
</div>
