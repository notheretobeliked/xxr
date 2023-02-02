<script lang="ts">
	type Image = {
		url: string
		alt: string
	}
	export let image: Image
	export let metadescription: string
	export let pageTitle: string
	export let url: string
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metadescription} />
	<meta name="twitter:url" content={url} />
	{#if image}
		<meta name="twitter:image" content={image.url} />
		<meta name="twitter:image:alt" content={image.alt} />
	{/if}
</svelte:head>
