<style>
  .input::placeholder {
    font-size: 15px;
  }

  .input:active,
  .input:focus {
    border: 1px solid #0e1821;
    outline: none;
  }

  .small {
    height: 40px;
  }

  .input:disabled {
    background-color: #f7f8f9;
    border: 1px solid #e4e8ec;
  }

  .input.has-icon {
    padding-right: 48px;
  }

  .message-box {
    bottom: -23px;
    left: 0;
  }

  .icon {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }

  .required-mark {
    width: 3px;
    height: 3px;
    background-color: #eb5757;
    position: absolute;
    top: 3px;
    margin-left: 6px;
    border-radius: 50%;
  }
</style>

<script>
  import { current_component, onMount } from 'svelte/internal';
  import { createEventDispatcher } from 'svelte';
  import { getEventsAction } from '@/utils';
  import Box from '@/components/Box.svelte';
  import Icon from '@/components/Icon.svelte';
  import ValidationMessage from '@/components/ValidationMessage.svelte';

  export let name = '';
  export let value = '';
  export let type = 'text';
  export let required = false;
  export let placeholder = '';
  export let password = false;
  export let number = false;
  export let textarea = false;
  export let readonly = false;
  export let disabled = false;
  export let color = false;
  export let date = false;
  export let range = false;
  export let valid = true;
  export let label = '';
  export let icon = '';
  export let iconSize = '20px';
  export let iconProps = { size: iconSize };
  export let textBold = false;
  export let textLarge = '16px';
  export let h = 26;
  export let validationMessage = '';
  export let absoluteValidation = true;
  export let autocomplete = 'off';
  export let relative = true;
  export let small = false;

  const events = getEventsAction(current_component);
  const dispatch = createEventDispatcher();

  export let focus = false;
  export let input;
  let capsLock = false;

  onMount(() => {
    if (input) {
      input.type = type;
    }
  });

  const onInput = (e) => {
    const type = e.target.type;
    const val = e.target.value;
    if (type === 'number' || type === 'range') {
      value = val === '' ? val : +val;
    }
    dispatch('input', e.target.value);
  };

  const onFocus = () => {
    focus = true;
    dispatch('focus');
  };

  const onBlur = () => {
    focus = false;
    dispatch('blur');
  };

  const onKeyDown = (e) => {
    capsLock = e.getModifierState('CapsLock');
    dispatch('keydown');
  };

  $: if (password) type = 'password';
  $: if (number) type = 'number';
  $: if (textarea) type = 'textarea';
  $: if (color) type = 'color';
  $: if (date) type = 'date';
  $: if (range) type = 'range';
</script>

<div class:relative class="flex items-center w-full">
  <label class="relative w-full">
    {#if label}
      <div class="label text-sm-1 text-info mb-3 font-bold">
        {label}
        {#if required}
          <span class="required-mark"></span>
        {/if}
      </div>
    {/if}
    <div class="flex items-center">
      <input
        {placeholder}
        {name}
        {readonly}
        {disabled}
        {autocomplete}
        bind:this="{input}"
        data-testid="{name}"
        role="textbox"
        bind:value
        use:events
        class:small
        class:has-icon="{icon}"
        class:font-bold="{textBold}"
        class:text-lg="{textLarge}"
        class:border-red="{!valid && !focus}"
        class:border-stroke="{valid || focus}"
        class="input rounded h-{h} px-8 w-full placeholder-black border text"
        on:input="{onInput}"
        on:focus="{onFocus}"
        on:blur="{onBlur}"
        on:click
        on:change
        on:keydown="{onKeyDown}"
      />
      <span class="icon flex items-center z-10">
        {#if icon}
          <Icon
            on:mousedown="{() => dispatch('icon-mousedown')}"
            on:mouseup="{() => dispatch('icon-mouseup')}"
            on:click="{() => {
              dispatch('icon-click');
            }}"
            name="{icon}"
            size="{iconSize}"
            {...iconProps}
          />
        {/if}
        <slot name="icon" />
      </span>
    </div>
  </label>
  <slot>
    <div class:absolute="{absoluteValidation}" class="message-box">
      {#if !valid && !focus}
        <ValidationMessage>{validationMessage}</ValidationMessage>
      {/if}
    </div>
    {#if password && capsLock}
      <div class="message-box absolute">
        <Box mb="{'px'}" textRed textXs italic {...$$props}>Caps Lock on</Box>
      </div>
    {/if}
  </slot>
</div>
