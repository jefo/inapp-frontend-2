<style>
  .play-button :global(.button) {
    padding: 0 14px 0 0;
    border: 1px solid #0E1821;
  }

  .icon-box {
    line-height: 30px;
    vertical-align: middle;
    padding: 0 8px;
    margin-right: 8px;
  }

  .icon-box :global(.icon) {
    margin-top: -1px;
  }

  .icon-box path {
    fill: #828282;
  }

  .paused .icon-box {
    border-right: 1px solid #E2E8F1;
  }

  .paused .icon-box path {
    fill: #10C5A3;
  }

  .button-inner {
    line-height: 30px;
  }
 </style>

<script>
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  export let paused = false;
</script>
<div class="play-button" class:paused>
  <Button>
    <div class="flex button-inner">
      <div class="icon-box">
        {#if paused}
          <Icon name="start" />
          {:else}
          <Icon name="pause" />
        {/if}
      </div>
      {#if paused}
        Restart
        {:else}
          Pause
      {/if}
    </div>
  </Button>
</div>
