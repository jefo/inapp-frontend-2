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
  import Header from './Header.svelte';
</script>

<main class="main-app">
  <Header />
  <div class="content">
    <slot />
  </div>
</main>
