<script>
  import Routing from 'svelte-router-spa';
  import { routes } from './routes';
  const Router = Routing.Router.default;
</script>

<Router {routes} />
