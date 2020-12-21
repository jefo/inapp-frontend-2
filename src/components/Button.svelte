<style>
  .button {
    height: 46px;
    border: 2px solid var(--color-tetriary-darken);
    border-radius: 4px;
    font-size: 13px;
    font-weight: bold;
    background-color: var(--color-tetriary-lighter2);
    @apply text-secondary;
    transition: background-color 0.1s ease-in-out;
    transition: border-color 0.1s ease-in-out;

    --default-border: #c9d3e2;
    --primary-bg-active: #07af7d;
    --disabled-bg: #e0e0e0;
  }

  .button:hover {
    border-color: var(--default-border);
  }

  .button:active {
    background-color: #ebedf7;
    border-color: var(--default-border);
  }

  .button:focus {
    text-decoration: underline;
    outline: none;
  }

  .primary {
    border: none;
    @apply bg-primary;
    color: #fff;
  }

  .primary:hover {
    background-color: #22c997;
  }

  .primary:focus {
    background-color: var(--primary-bg-active);
  }

  .primary:active {
    border: 2px solid #007753;
    background-color: var(--primary-bg-active);
  }

  .primary.outlined {
    border: 2px solid var(--color-primary);
    background-color: #fff;
    @apply text-secondary;
  }

  .primary.outlined:hover {
    border: 2px solid #0bb985;
  }

  .primary.outlined:focus {
    border: 2px solid var(--color-primary);
  }

  .primary.outlined:active {
    border: 2px solid var(--color-primary);
    background-color: #f7f7f7;
  }

  .secondary {
    border: none;
    @apply bg-secondary;
    color: #fff;
  }

  .secondary:hover {
    background-color: #2d3032;
  }

  .secondary:focus {
    text-decoration: underline;
    background-color: #000;
  }

  .secondary:active {
    border: 2px solid #000;
    background-color: #2d3032;
  }

  .secondary.outlined {
    border: 2px solid var(--color-tetriary);
    background-color: #fff;
    @apply text-secondary;
  }

  .secondary.outlined:hover {
    border: 2px solid var(--color-tetriary-darken);
  }
  .secondary.outlined:focus {
    border: 2px solid var(--color-secondary);
  }
  .secondary.outlined:active {
    text-decoration: underline;
    background-color: #f6f6f6;
  }

  .red.outlined {
    background-color: #ffe6e6;
    color: var(--color-secondary);
    border: 2px solid var(--color-red);
  }

  .red.outlined.active {
    background-color: #fff;
  }

  .black {
    background-color: var(--color-secondary);
    color: #fff;
    border: 2px solid var(--color-secondary);
  }

  .black:active,
  .black:focus {
    border: 2px solid var(--color-primary);
  }

  .large {
    height: 52px;
    padding: 0 20px;
  }
  .medium {
    height: 46px;
  }
  .small {
    height: 40px;
  }

  .extra-small {
    height: 35px;
  }

  .dimmed,
  .dimmed:hover,
  .dimmed:focus {
    border: none;
    background-color: var(--disabled-bg);
    text-decoration: none;
  }

  .button[disabled] {
    background-color: var(--disabled-bg);
  }

  .button.outlined[disabled] {
    background-color: #fff;
    border: 2px solid var(--disabled-bg);
  }
</style>

<script>
  export let primary = false;
  export let secondary = false;
  export let outlined = false;
  export let red = false;
  export let active = false;
  export let submit = false;
  export let type = submit ? 'submit' : '';
  export let disabled = false;
  export let size = 'medium';
  export let dimmed = false;
  export let value = '';
  export let minWidth = 'auto';
  export let selected = false;
  export let fullWidth = false;
  export let relative = false;
  export let wide = false;
  export let black = false;
  export let px = 8;
  export let py = 0;
</script>

<button
  {type}
  {disabled}
  on:click
  data-value="{value}"
  class:dimmed
  class:selected
  class:primary
  class:secondary
  class:outlined
  class:relative
  class:red
  class:active
  class:w-full="{fullWidth}"
  class:wide
  class:black
  class="control button rounded px-{px} py-{py}
  {size}
  {value}"
  style="min-width: {minWidth}"
>
  <slot />
</button>
