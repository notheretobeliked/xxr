<script>
	import '../app.css'
	import { Modals, closeModal } from 'svelte-modals'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'

	inject({ mode: dev ? 'development' : 'production' })
</script>

<slot />
<Modals>
	<div slot="backdrop" class="backdrop" on:click={closeModal} on:keypress={closeModal} />
</Modals>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	video {
		height: 100vh;
		width: 100vw;
		object-fit: cover;
	}
</style>
