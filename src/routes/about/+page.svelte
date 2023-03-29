<script lang="ts">
	import OpenGraph from '$lib/components/SEO/OpenGraph.svelte'
	import Twitter from '$lib/components/SEO/Twitter.svelte'
  import Button from '$lib/components/Button.svelte'

	import type { PageData } from '../$types';
	import { goto } from '$app/navigation'
	export let data 

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

</script>

<Twitter {pageTitle} {metadescription} {url} {image} />
<OpenGraph {pageTitle} {metadescription} siteUrl={url} {image} {squareImage} />

<button
class=""
on:click={() => goto('/')}
on:keypress={() => goto('/')}
>
<Button label='Back to the website' />
</button>

<div class="mt-20 w-full max-w-6xl m-auto text-base">
  <h1 class="mb-4">What is this?</h1>

  <p class="mb-4">This is a tool to help mobilise 100,000 people, from many places, and across different movements and groups, to get out and surround Parliament on 21st of April.</p>
  
  <p class="mb-4">It was envisioned by a small group of people who have been active in the climate movement for the last 5 years, and created by <a class="border-b border-pink hover:border-black" href="https://instagram.com/notheretobeliked/" rel="noreferrer" target="_blank">Not here to be liked.</a></p>
  
  <p class="mb-4">We want to speak directly to people who are outside the environmental bubble, by saying things that organisations aren't. By being unbranded, and bypassing organisational beauracracy, we're reaching out directly to members and supporters of groups we know want to take part, but aren't perhaps yet publicly saying so. </p>
  
  <p class="mb-4">This website been accused of being created by Extinction Rebellion by some people, and said to be made by people who want XR to fail by others. None of the creators are currently part of Extinction Rebellion, but we hope it is complimentary, not harmful to their efforts. (If <em>you</em> still think its an attack, then we invite you to dress in red and silently walk around Parliament Square thinking about that.)</p>
  
  <p class="mb-4">Again, this website is not owned by any organisation. It was created to help ordinary people, who support many causes, come together for change. We all need to be mobilising for mass nonviolent civil disobedience in the face of climate crisis, cost of living chaos, environmental destruction, and massive inequality and injustice.</p>
  
  <p class="mb-4">Do your part by sharing this website, speaking to your friends and family, and surrounding Parliament from 21 April.</p>
</div>