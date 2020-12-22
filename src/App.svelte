<script>
  import { setContext } from 'svelte';
  import Routing from 'svelte-router-spa';
  import { routes } from './routes';
  import appsEntityFactory from './entities/apps';
  const Router = Routing.Router.default;

  const appsEntity = appsEntityFactory();

  setContext('entities', {
    appsEntity,
  });
</script>

<Router {routes} />
