<script>
  import '../lib/styles.css';
</script>

<div class="site-wrapper">
  <slot />
</div>

<style>
  /* Simple wrapper that fixes the scroll issue */
  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

