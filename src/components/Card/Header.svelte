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
  class="card-header flex items-center py-{py} px-{px} pb-{pb} pt-{pt} border-b border-gray-a lg:border-none"
  style="background-color: {backgroundColor}"
>
  <h1 class="font-bold text-base-1 flex-1">
    <slot />
  </h1>
  <div class="flex-auto w-full">
    <slot name="filter" />
  </div>
  <slot name="control" />
</div>
