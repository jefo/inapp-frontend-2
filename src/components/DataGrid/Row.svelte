<style>
  .row {
    display: contents;
  }

  .row.large :global(.grid-cell) {
    min-height: 70px;
  }
</style>

<script>
  export let large = false;
</script>

<div class="row" class:large>
  <slot />
</div>
