<script>
  import "../app.css";
  import { Modals, closeModal } from 'svelte-modals'
</script>

<slot />
<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
    on:keypress={closeModal}
  >
</div>
</Modals>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }

  video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
</style>
