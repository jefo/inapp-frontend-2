<script>
  export let home = false;
  export let href = location.host.gref;

  let src = home ? '/logo-white.svg' : '/logo-black.svg';
</script>

<a {href}>
  <img {src} alt="Next Millenium Logo" />
</a>
