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
  <video autoplay playsinline mute>
    <source src="/xr-dance.webm" type="video/webm">
    <source src="/xr-dance.mp4" type="video/mp4">
</video>
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
