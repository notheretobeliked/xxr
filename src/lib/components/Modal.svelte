<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import Button from './Button.svelte'

  // provided by <Modals />
  export let isOpen: boolean

  export let title: string
  export let message: string
  export let buttonlabel: string = "I will"
  
  const video: Array<any> = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
  ]
  
  let randomNumber:number = Math.floor(Math.random()*video.length);
</script>

{#if isOpen}
<div
  class="backdrop fixed top-0 right-0 bottom-0 left-0"
  on:click={closeModal}
  on:keypress={closeModal}
  >
  <video autoplay playsinline mute>
  <source src="/videos/{video[randomNumber]}" type="video/mp4">
  </video>
</div>
<div role="dialog" class="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none p-4 lg:p-8">
    <div class="w-full bg-yellow max-w-2xl p-4 md:p-12 lg:p-24 flex flex-col justify-between pointer-events-auto">
      <h2 class="text-base lg:text-xl mb-4 lg:mb-8">{title}</h2>
      <p class="text-base lg:text-xl">{@html message}</p>
      <div class="actions">
        <div class="text-base lg:text-xl w-full" on:click={closeModal} on:keypress={closeModal}>
          <Button label={buttonlabel} />
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }

</style>
