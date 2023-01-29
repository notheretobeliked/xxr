<script lang="ts">
	let h: number = 0
	let wh: number = 0
	let vh: string = '--vh: 200vh'
	let active: boolean = false

	// update css variabel called --vh
	$: vh = `--vh: ${wh - h}px`

	import Button from './Button.svelte'
</script>

<svelte:window bind:innerHeight={wh} />

<div
	class="overlay min-h-screen fixed top-0 left-0 right-0 bg-black text-pink text-base lg:text-xl transition-position 0.5s overflow-scroll h-full pb-24 {active
		? 'active'
		: ''}"
	style={vh}
	aria-expanded={active ? 'true' : 'false'}
	on:click={() => (active = !active)}
	on:keypress={() => (active = !active)}
>
	<div class="header-grid grid grid-cols-2 px-4 lg:px-8">
		<header bind:clientHeight={h} class="py-4">
			<h1 class="mt-0">Surround Parliament 21st April 2023</h1>
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

	<div class="space-it about-section mt-6 lg:mt-14 grid lg:grid-cols-3 px-4 lg:px-8">
		<div class="col-span-2">
			<h1 class="text-2xl">What's at stake?</h1>

			<p>If 100,000 people stay day after day from 21st April, we will win.</p>
			<p>
				With you taking part, we can make it happen. You can be there, together we will embrace
				democracy.
			</p>
			<p>If 10,000 people come and go, we will die.</p>
			<p>
				The climate movement dies, floods and fires increase, we lose our right to protest and
				strike, food supplies grow short, democracy crumbles, the doomsday glacier collapses, people
				lose their homes, species go extinct, buisness as usual continues.
			</p>
			<p>
				But on the other hand: If enough of us stay day after day at the seat of power we can create
				the change we need together.
			</p>
			<p>However you stand for love, care, rights, life: Stand together on 21st April 2023.</p>
		</div>
		<hr class="row-start-2 h-px  col-span-2 my-8 bg-pink border-0" />
		<div class="row-start-3 col-span-2 mt-6 lg:mt-14">
			<h1 class="animate-bounce text-2xl">What can I do?</h1>
			<div class="grid grid-cols-3 gap-4">
				<Button label="Sign up to be there" href="/sign-up" />
				<Button label="Talk to everyone" href="/sign-up" />
				<Button label="Send us money" href="/sign-up" />
			</div>
		</div>
	</div>
</div>

<style>
	.overlay {
		top: var(--vh);
		transition: top 0.5s ease-out;
	}

	.space-it p,
	.space-it h1 {
		@apply mb-4;
	}

	.about-section.grid {
		grid-template-columns: '1fr 1fr 1fr';
	}

	.overlay button {
		transition: transform 1s ease-out;
	}

	.grid.header-grid {
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
