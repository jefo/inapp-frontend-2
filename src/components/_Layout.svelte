<style global>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    min-width: fit-content;
    font-family: 'Open Sans', sans-serif;
    background-color: #e5e5e5;
  }
  .main-app .content {
    flex: 1 0 auto;
    position: relative;
    padding-top: 17px;
  }

  @media (min-width: 1024px) {
    .main-app .content {
      margin: 0 auto;
    }
  }

  @media (min-width: 1266px) {
    .main-app .content {
      position: relative;
      flex: 1 0 auto;
      width: 1376px;
      padding-top: 30px;
      margin: 0 auto;
    }
  }
</style>

<script>
  import { getContext } from 'svelte';
  import Header from '@/components/Header.svelte';
  import { Route } from '@/routing';
  export let component;
  export let context;
  const { notificationsEntity } = getContext('entities');
  const unread = notificationsEntity.unread();
  let hasNotifications = false;

  $: hasNotifications = $unread.length > 0;
</script>

<main class="main-app">
  <Header {context} hasNotifications={hasNotifications} />
  <div class="content">
    <slot />
    <Route {component} />
  </div>
</main>
