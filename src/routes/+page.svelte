<script lang="ts">
	import { fly } from 'svelte/transition'
	import { cubicOut } from 'svelte/easing'
	import { OnMount } from 'fractils'

	import type { PageData } from './$types';
	export let data 
	
	const sentence: string =
		"#ThePeople don't trust the #UKGovernment. Enough is enough!. #JustStop killing us. This is an #attackonnature on Black Lives on #OurNHS an #Attack on Britain. #togetherwearestronger if the people unite & #actnow #forthemanynotthefew #4justice & peace for wildlife #4nature. #timeforbetterpay a #greennewdeal #foryourworld. 21 April A National act of rebellion on the #HousesOfParliament"
	let pattern: RegExp = /[#]/g
	let allwords: Array<string> = sentence
		.replace(pattern, '')
		.replaceAll('.', ' .')
		.toLowerCase()
		.split(' ')
	interface MapType {
		word: string
		filename: string
	}

	const slug= "/"


	const indexOfAll = (arr: Array<string>, val: string): Array<number> =>
		arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [] as number[]);

	let allwordsMap: Array<MapType> = allwords.map((currentword, i) => {
		let index = indexOfAll(allwords, currentword)
		let filename =
			i !== index[0] ? `${currentword}_${index.findIndex((j:number) => i === j) + 1}` : currentword
		return { word: currentword, filename: filename }
	})

	const image = {
		url: '/XXR-Open-Graph_v1.png',
		alt: 'Surround Parliament, 21 April 2023',
	}

	const squareImage = {
		url: '/XXR-Open-Graph_v1_sq.png',
		alt: 'Surround Parliament, 21 April 2023',
	}

	const {
		pageTitle,
		metadescription,
		url,
	} = data as PageData
	


	import Word from '$lib/components/Word.svelte'
	import About from '$lib/components/About.svelte'
	import Svgs from '$lib/components/svgs.svelte'
	import OpenGraph from '$lib/components/SEO/OpenGraph.svelte'
	import Twitter from '$lib/components/SEO/Twitter.svelte'
</script>

<Twitter {pageTitle} {metadescription} {url} {image} />
<OpenGraph {pageTitle} {metadescription} siteUrl={url} {image} {squareImage} />

<p class="sr-only">{sentence}</p>

<div
	class="flex flex-row gap-6 w-full flex-wrap items-center align-middle justify-center max-w-4xl m-auto pb-48"
>
	<OnMount>
		{#each allwordsMap as { word, filename }, i}
			{#if word == '.'}
				<div class="basis-full h-4" />
			{:else}
				<div in:fly={{ x: -200, delay: i * 100, duration: 200, easing: cubicOut }} out:fly={{ x: -200, delay: i * 10, duration: 20, easing: cubicOut }}>
					<Word {word} image={filename} />
				</div>
			{/if}
		{/each}
	</OnMount>
</div>
<About />
<div class="hidden">
	<Svgs />
</div>
<div id="footer" />
