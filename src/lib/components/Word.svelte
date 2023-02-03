<script lang="ts">
	export let image: string;
	export let word: string = image;
	export let folder:string = "words"

	const png = `/${folder}/${image}.png`;
	const webp = `/${folder}/${image}.webp`;

</script>


	<figure class="h-12 lg:h-20 w-auto">
		<picture class="h-12 lg:h-20 w-auto block">
			<source media="(min-width: 50px)"  srcset={webp} type="image/webp"  />
			<img src={png} alt={word} class="h-12 lg:h-20 w-auto" />
		</picture>
	</figure>
	<span class="sr-only">{word}</span>

<style>
</style>