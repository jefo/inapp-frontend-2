<style>
  /* eslint-disable */
  .header {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .menu-btn-box {
    position: relative;
    display: inline-flex;
    align-items: center;
    line-height: 15px;

    @apply flex-initial;
  }

  .menu-btn {
    display: block;
    @apply px-21 py-11;
  }

  .logo-container :global(a) {
    @apply px-18 py-11;
  }

  .menu-btn-box:hover,
  .menu-btn-box:focus,
  .menu-icon-box:hover,
  .menu-icon-box:focus {
    border-bottom: 1px solid #26ddcd;
    @apply bg-tetriary-lighter2;
    transition: all 0.2s ease-in-out;
  }

  .menu-btn-box.last {
    border-right: 0;
  }

  .menu-btn-box a {
    letter-spacing: 0.08rem;
  }

  .menu-btn-box a.active,
  .menu-btn-box button.active {
    @apply text-red font-bold;
  }

  .menu-btn-box button {
    @apply border-none tracking-widest outline-none;
  }

  .menu-btn-box:hover,
  .menu-btn-box:focus,
  .menu-icon-box:hover,
  .menu-icon-box:focus {
    border-bottom: 1px solid #26ddcd;
    @apply bg-tetriary-lighter2;
    transition: all 0.2s ease-in-out;
  }

  .menu-btn-box:not(.last):after {
    position: absolute;
    top: 25px;
    right: 0;
    height: 15px;
    content: ' ';
    border-right: 1px solid #e0e0e0;
  }

  .menu-icon-box {
    position: relative;
    width: 68px;
    border-left: 1px solid #e0e0e0;
  }

  .mobile-menu-header {
    display: flex;
    @apply pt-20;
    @apply pb-6;
    letter-spacing: 0.08em;
    color: #989898;
    border-bottom: 1px solid var(--color-gray-a);
  }

  .mobile-menu-box {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    letter-spacing: 0.08em;
    @apply text-secondary;
  }

  .close-button {
    width: 20px;
    height: 20px;
  }

  .gradient-box {
    background: linear-gradient(269.64deg, #f5f6f8 44.58%, rgba(245, 246, 248, 0) 101.31%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 100%;
    width: 96px;
  }
</style>

<script>
  import { onMount, onDestroy } from 'svelte';
  import Logo from './Logo.svelte';
  import IconButton from './IconButton.svelte';
  import List from './DropdownMenu/List.svelte';
  import ListItem from './DropdownMenu/Item.svelte';

</script>

<!-- svelte-ignore missing-declaration -->
<header class="header flex h-33 items-center justify-between">
  <div class="logo-container flex-initial flex h-full items-center">
    <Logo home href="/" />
    <div class="hidden xl:block gradient-box"></div>
  </div>
  <div class="hidden lg:flex relative h-33">
    <div class="menu-btn-box">
      <a href="/" class="menu-btn" class:active="{location.pathname === '/'}">
        OVERVIEW
      </a>
    </div>
    <div class="menu-btn-box">
      <a href="/reports" class="menu-btn" class:active="{location.pathname === '/reports'}">
        REPORTS
      </a>
    </div>
  </div>
</header>
