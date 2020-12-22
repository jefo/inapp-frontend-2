<style>
  .grid-cell {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 35px;
  }

  .header {
    /* background-color: #e2e8f1; */
    background-color: var(--color-tetriary);
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    color: var(--color-secondary);
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
    flex-direction: row;
  }
  .grid-cell.active {
    --bg-opacity: 5%;
    background-color: rgba(14, 207, 138, var(--bg-opacity)) !important;
  }
  .grid-cell.paused {
    --bg-opacity: 5%;
    background-color: rgba(235, 75, 79, var(--bg-opacity)) !important;
  }

</style>

<script>
  export let header = false;
  export let align = 'center';
  export let pt = 'init';
  export let pr = 'init';
  export let pb = 'init';
  export let pl = 'init';
  export let px = 'init';
  export let py = 'init';
  export let mr = 'px';
  export let mb = 'init';
  export let title = null;
  export let span = null;
  export let active = false;
  export let paused = false;
  export let clickable = false;
  export let relative = false;
  let classes = '';
  if (span) {
    classes += `col-span-${span}`;
  }
</script>

<div
  class="grid-cell truncate py-{py} px-{px} pt-{pt} pr-{pr} pb-{pb} pl-{pl} mr-{mr} mb-{mb}
  {align}
  {classes}"
  {title}
  class:cursor-pointer={clickable}
  class:active
  class:paused
  class:header
  class:relative
  on:click
>
  <slot />
</div>
