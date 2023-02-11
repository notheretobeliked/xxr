<script lang="ts">
	import { onMount } from 'svelte'
	import { fade, fly } from 'svelte/transition'
	import { openModal } from 'svelte-modals'

	let h: number = 0
	let wh: number = 0
	let vh: string = '--vh: 100vh'
	export let active: boolean = false
	let overlay: HTMLElement

	// update css variabel called --vh
	$: vh != '--vh: 100vh' ? (vh = `--vh: ${wh - h}px`) : (vh = '--vh: 100vh')

	import Button from './Button.svelte'
	import Modal from './Modal.svelte'
	import Word from './Word.svelte'

	onMount(async () => {
		vh = `--vh: ${wh - h}px`
	})
</script>

<svelte:window bind:innerHeight={wh} />

<div
	class="overlay min-h-screen fixed top-0 left-0 right-0 bg-black text-pink text-base lg:text-xl transition-position 0.5s max-h-screen pb-24 {active
		? 'active'
		: ''}"
	style={vh}
	aria-expanded={active ? 'true' : 'false'}
	bind:this={overlay}
>
	<div
		class="header-grid grid md:grid-cols-2 lg:grid-cols-4  gap-6px-4 lg:px-8 w-full max-w-6xl m-auto"
	>
		<header bind:clientHeight={h} class="py-4 px-2 lg:col-span-3 sticky top-0">
			<h1 class="mt-0">Surround Parliament from 21 April 2023</h1>
			<h2 class="mb-0">
				Everyone’s coming.<br />
				Or everyone’s dying.
			</h2>
			<button
				class="md:hidden"
				on:click={() => (active = !active)}
				on:keypress={() => (active = !active)}
			>
				<Button label={!active ? 'What’s all this then?' : 'Back to the collage'} />
			</button>
		</header>
		<div class="pt-2">
			<button
				class="hidden md:flex"
				on:click={() => (active = !active)}
				on:keypress={() => (active = !active)}
			>
				<Button label={!active ? 'What’s all this then?' : 'Back to the collage'} />
			</button>
		</div>
	</div>
	{#if active}
		<div
			in:fly={{ y: 200, duration: 1000 }}
			out:fade={{ duration: 300 }}
			class="overflow-scroll h-screen pb-96"
		>
			<div class="bg-yellow w-full text-black py-7 lg:py-12">
				<div class="space-it px-2 grid lg:grid-cols-4  gap-6px-4 lg:px-8 w-full max-w-6xl m-auto">
					<div class="col-span-3">
						<h1 class="">What’s all this then?</h1>

						<p>Surround Parliament: Embrace democracy.</p>

						<p>
							100,000 people surrounding Parliament from 21 April, demanding a liveable future for
							all. People coming 21 April, staying the night. People coming 22 April for the day.
							People coming 23 April and staying till we win.
						</p>

						<p>If 100,000 people stay day after day, we will win.</p>

						<p>With you taking part, we can make it happen.</p>
					</div>
				</div>
			</div>

			<div class="bg-black w-full text-pink py-7 lg:py-12">
				<div class="space-it px-2 grid lg:grid-cols-4  gap-6px-4 lg:px-8 w-full max-w-6xl m-auto">
					<div class="col-span-3">
						<h1 class="">Who’s coming?</h1>

						<p>Everyone is coming.</p>

						<p>
							If you’re pissed off with a government that is doing nothing to protect the people and
							ecosystems, you’ll be in good company: there will be members of the Nurses Union, the
							National Trust and Greenpeace, as well as supporters of Black Lives Matter and a Green
							New Deal. Thousands will attend who have never been to a protest before. People who
							want to live, not die.
						</p>

						<p>However you stand for love, care, rights, life: Stand together on 21 April 2023.</p>
					</div>
				</div>
			</div>

			<div class="bg-yellow w-full text-black py-7 lg:py-12">
				<div class="space-it grid lg:grid-cols-4  gap-6 px-2 lg:px-8 w-full max-w-6xl m-auto">
					<div class="col-span-3">
						<h1 class="">OK, so what can i do?</h1>

						<p>Just show up.</p>

						<p>
							This will not be like the Iraq march, because we’re not going home at the end of the
							day. So come everyday or any day and Protest Parliament from 21 April.
						</p>

						<p>
							This will be like the fall of the Berlin wall. So bring your friends, they won’t want
							to miss it.
						</p>

						<p>But there’s more you can do to join the campaign:</p>
					</div>
					<div
						class="lg:row-start-2 h-full lg:px-0 col-span-4 lg:col-span-1 mb-4"
						on:click={() =>
							openModal(Modal, {
								title: 'Pledge to come',
								message:
									'I will Protest Parliament from 21 April.<br><br><em>Just say it out loud. We don’t want your your personal data, we want to live.</em>'
							})}
						on:keypress={() =>
							openModal(Modal, {
								title: 'Pledge to come',
								message:
									'I will Protest Parliament from 21 April.<br><br><em>Just say it out loud. We don’t want your your personal data, we want to live.</em>'
							})}
					>
						<Button label="Pledge to come" />
					</div>
					<div
						class="lg:row-start-2  h-full lg:px-0 col-span-4 lg:col-span-1 mb-4"
						on:click={() =>
							openModal(Modal, {
								title: 'Bring your friends',
								message:
									'Tell your friends about it today. <br><br><em>We don’t have the money to send them targeted ads, and it’s more convincing coming from you anyway</em>'
							})}
						on:keypress={() =>
							openModal(Modal, {
								title: 'Bring your friends',
								message:
									'Tell your friends about it today. <br><br><em>We don’t have the money to send them targeted ads, and it’s more convincing coming from you anyway</em>'
							})}
					>
						<Button label="Bring your friends" />
					</div>
					<div
						class="lg:row-start-2  h-full lg:px-0 col-span-4 lg:col-span-1 mb-4"
						on:click={() =>
							openModal(Modal, {
								title: 'Share the memes',
								message:
									'There’s still time to call on more groups to support the coalition.<br><br>Share this website on social media. Tag the groups you want to come, or reply to their posts with this link. <br><br><em>We don’t have the connections you do. Or the money to target them on social media. So we’re counting on you to spread the word.</em>'
							})}
						on:keydown={() =>
							openModal(Modal, {
								title: 'Share the memes',
								message:
									'There’s still time to call on more groups to support the coalition.<br><br>Share this website on social media. Tag the groups you want to come, or reply to their posts with this link. <br><br><em>>We don’t have the connections you do. Or the money to target them on social media. So we’re counting on you to spread the word.</em>'
							})}
					>
						<Button label="Share the memes" />
					</div>
					<div
						class="lg:row-start-2  h-full lg:px-0 col-span-4 lg:col-span-1 mb-4"
						on:click={() =>
							openModal(Modal, {
								title: 'Take the quiz',
								message:
									'Will you surround Parliament from 21st April?<br><br>Answer correctly to be in with a chance to win hope.<br><br><em>Terms and conditions apply: hope is a verb</em>'
							})}
						on:keypress={() =>
							openModal(Modal, {
								title: 'Take the quiz',
								message:
									'Will you surround Parliament from 21st April?<br><br>Answer correctly to be in with a chance to win hope.<br><br><em>Terms and conditions apply: hope is a verb</em>'
							})}
					>
						<Button label="Take the quiz" />
					</div>
				</div>
			</div>

			<div class="bg-black w-full text-pink py-7 lg:py-12">
				<div class="space-it px-2 grid lg:grid-cols-4  gap-6px-4 lg:px-8 w-full max-w-6xl m-auto">
					<div class="col-span-3">
						<h1 class="">I’m still not convinced. What’s at stake?</h1>

						<p>If this fails, we all die.</p>

						<p>
							The climate movement dies, floods and fires increase, we lose our right to protest and
							strike, food supplies grow short, democracy crumbles, the doomsday glacier collapses,
							people lose their homes, species go extinct as business as usual continues.
						</p>

						<p>
							If 10,000 show up, wave their flags, and go home at the end of the day, this fails.
						</p>

						<p>
							Don't assume someone else will sort this out. You are we and us. We need you to help
							it grow.
						</p>

						<p>With you there, together we will embrace democracy.</p>

						<p>
							Even if you’re shit scared, don’t think it will work, or are worried about the
							logistics, come. There will be enough toilets for everyone. With you taking part, we
							can overcome anything.
						</p>
					</div>
				</div>
			</div>

			<div class="bg-yellow w-full text-black py-7 lg:py-12">
				<div class="space-it px-2 grid lg:grid-cols-4  gap-6px-4 lg:px-8 w-full max-w-6xl m-auto">
					<p class="col-span-4 mb-4">
						Supporters of these organisations and many more will be surrounding Parliament from 21
						April 2023. Will you?
					</p>
					<div class="col-span-4 flex flex-row gap-6 logos">
						<Word image="rspb" folder="logos" />
						<Word image="bpt" folder="logos" />
						<Word image="wlt" folder="logos" />
						<Word image="te" folder="logos" />
						<Word image="fote" folder="logos" />
						<Word image="republiclogo" folder="logos" />
						<Word image="undod" folder="logos" />
						<Word image="sas" folder="logos" />
						<Word image="kbt" folder="logos" />
						<Word image="NationalTrust" folder="logos" />
						<Word image="RCN" folder="logos" />
						<Word image="Amnesty" folder="logos" />
						<Word image="jw3" folder="logos" />
						<Word image="unison" folder="logos" />
						<Word image="hjc" folder="logos" />
						<Word image="CND" folder="logos" />
						<Word image="LWIC" folder="logos" />
						<Word image="ies" folder="logos" />
						<Word image="er" folder="logos" />
						<Word image="Greenpeace" folder="logos" />
						<Word image="greenmuslims" folder="logos" />
						<Word image="dontpay" folder="logos" />
						<Word image="pbj" folder="logos" />
						<Word image="BLM" folder="logos" />
						<Word image="CPRE" folder="logos" />
						<Word image="ICC" folder="logos" />
						<Word image="unite" folder="logos" />
						<Word image="GND" folder="logos" />
						<Word image="RMT" folder="logos" />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.overlay {
		top: var(--vh);
		transition: top 0.5s ease-out;
		--vh: 200vh;
	}

	.logos {
		flex-wrap: wrap;
	}

	.space-it p,
	.space-it h1 {
		@apply mb-4;
	}

	.overlay button {
		transition: transform 200ms ease-out;
	}

	.overlay.active {
		top: 0;
	}

	@media (min-width: 768px) {
		.overlay.active {
			top: 5rem;
		}
	}

	.overlay.active button {
		transform: rotate(2deg);
	}

	:root {
		--vh: 0px;
	}
</style>
