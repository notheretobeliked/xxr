<script lang="ts">
	import { onMount } from 'svelte'

	let h: number = 0
	let wh: number = 0
	let vh: string = '--vh: 100vh'
	export let active: boolean = false
	let overlay: HTMLElement

	// update css variabel called --vh
	$: vh != '--vh: 100vh' ? (vh = `--vh: ${wh - h}px`) : (vh = '--vh: 100vh')

	import Button from './Button.svelte'

	onMount(async () => {
		vh = `--vh: ${wh - h}px`
	})
</script>

<svelte:window bind:innerHeight={wh} />

<div
	class="overlay min-h-screen fixed top-0 left-0 right-0 bg-black text-pink text-base lg:text-xl transition-position 0.5s overflow-scroll h-full pb-24 {active
		? 'active'
		: ''}"
	style={vh}
	aria-expanded={active ? 'true' : 'false'}
	bind:this={overlay}
>
	<div class="header-grid grid grid-cols-2 lg:grid-cols-4 px-4 lg:px-8 w-full max-w-6xl m-auto">
		<header bind:clientHeight={h} class="py-4 lg:col-span-3">
			<h1 class="mt-0">Surround Parliament 21st April 2023</h1>
			<h2 class="mb-0">
				Everyone's coming.<br />
				Or everyone's dying.
			</h2>
		</header>
		<div>
			<button on:click={() => (active = !active)} on:keypress={() => (active = !active)}>
				<Button label={!active ? "What's all this then?" : 'Pretty collage please'} />
			</button>
		</div>
	</div>

	<div class="bg-yellow w-full text-black py-7 lg:py-12">
		<div
			class="space-it grid lg:grid-cols-4 px-4 lg:px-8 w-full max-w-6xl m-auto"
		>
			<div class="col-span-3">
				<h1 class="text-2xl">What's all this then?</h1>

				<p>It’s the people embracing democracy.</p>

				<p>
					100,000 people surrounding Parliament from 21 April, demanding a liveable future for all.
				</p>

				<p>If 100,000 people stay day after day, we will win.</p>

				<p>With you taking part, we can make it happen.</p>
			</div>
		</div>
	</div>

	<div class="bg-black w-full text-pink py-7 lg:py-12">
		<div
			class="space-it grid lg:grid-cols-4 px-4 lg:px-8 w-full max-w-6xl m-auto"
		>
			<div class="col-span-3">
				<h1 class="text-2xl">Who's coming?</h1>

				<p>Everyone is coming.</p>

				<p>
					If you’re pissed off with the government but not a protestor, you’ll be in good company:
					there will be members of the Nurses Union, the National Trust and Greenpeace. As well as
					supporters of black lives matter and a green new deal. Thousands will attend who have
					never been to a protest before. People who want to live, not die.
				</p>

				<p>However you stand for love, care, rights, life: Stand together on 21st April 2023.</p>
			</div>
		</div>
	</div>

	<div class="bg-yellow w-full text-black py-7 lg:py-12">
		<div
			class="space-it mt-6 lg:mt-14 grid lg:grid-cols-4 px-4 lg:px-8 w-full max-w-6xl m-auto"
		>
			<div class="col-span-3">
				<h1 class="text-2xl">OK, so what can i do?</h1>

				<p>Just show up.</p>

				<p>
					This will not be like the Iraq march, because we’re not going home at the end of the day.
					So come everyday or any day and Protest Parliament from April 21st.
				</p>

				<p>
					This will be like the fall of the Berlin wall. So bring your friends, they won't want to
					miss it.
				</p>

				<p>But there’s more you can do to join the campaign:</p>
			</div>
			<div class="lg:row-start-2 h-full col-span-4 lg:col-span-1">
				<Button label="Pledge to come" />
			</div>
			<div class="lg:row-start-2  h-full col-span-4 lg:col-span-1">
				<Button label="Get your friends to come" />
			</div>
			<div class="lg:row-start-2  h-full col-span-4 lg:col-span-1">
				<Button label="Share the memes" />
			</div>
			<div class="lg:row-start-2  h-full col-span-4 lg:col-span-1">
				<Button label="Take the quiz" />
			</div>
		</div>
	</div>

	<div class="bg-black w-full text-pink py-7 lg:py-12">
		<div
			class="space-it mt-6 lg:mt-14 grid lg:grid-cols-4 px-4 lg:px-8 w-full max-w-6xl m-auto"
		>
			<div class="col-span-3">
				<h1 class="text-2xl">I’m still not convinced. What’s at stake?</h1>

				<p>If this fails, we all die.</p>

				<p>
					The climate movement dies, floods and fires increase, we lose our right to protest and
					strike, food supplies grow short, democracy crumbles, the doomsday glacier collapses,
					people lose their homes, species go extinct as business as usual continues.
				</p>

				<p>If 10,000 show up, wave their flags, and go home at the end of the day, this fails.</p>

				<p>
					Don't assume someone else will sort this out. You are we and us. We need you too help it
					grow.
				</p>

				<p>With you there, together we will embrace democracy.</p>

				<p>Even if you're shit scared, don't think it will work, or are worried about the logistics, come. There will be enough toilets for everyone. With you taking part, we can overcome anything.</p>

			</div>
		</div>
	</div>
</div>

<style>
	.overlay {
		top: var(--vh);
		transition: top 0.5s ease-out;
		--vh: 200vh;
	}

	.space-it p,
	.space-it h1 {
		@apply mb-4;
	}

	.overlay button {
		transition: transform 200ms ease-out;
	}

	.overlay.active {
		top: 30px;
	}

	.overlay.active button {
		transform: rotate(2deg);
	}

	:root {
		--vh: 0px;
	}
</style>
