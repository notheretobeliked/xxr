<script lang="ts">
	let h: number = 0
	let wh: number = 0
	let vh: string = '--vh: 200vh'
	let active: boolean = false

	// update css variabel called --vh
	$: vh = `--vh: ${wh - h}px`
</script>

<svelte:window bind:innerHeight={wh} />

<div
	class="overlay min-h-screen fixed top-0 left-0 right-0 bg-black text-pink text-base transition-position 0.5s {active
		? 'active'
		: ''}"
	style={vh}
  aria-expanded="{active
		? 'true'
		: 'false'}"
   on:click={() => (active = !active)}
   on:keypress={() => (active = !active)}
  >
	<div class="grid grid-cols-2">
		<header bind:clientHeight={h}>
			<h1>Surround Parliament 21st April 2023</h1>
			<h2>
				Everyone's coming.<br />
				Or everyone's dying.
			</h2>
		</header>
		<div>
			<button on:click={() => (active = !active)}>
				<div class="text-2xl">+</div>
			</button>
		</div>
	</div>
</div>

<style>
	.overlay {
		top: var(--vh);
		transition: top 0.5s ease-out;
	}

	.overlay button {
		transition: transform 1s ease-out;
	}

	.grid {
		grid-template-columns: 1fr 40px;
	}

	.overlay.active {
		top: 30px;
	}

	.overlay.active button {
		transform: rotate(45deg);
	}

	:root {
		--vh: 0px;
	}
</style>
