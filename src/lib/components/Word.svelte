<script lang="ts">
	export let word: string;
	export let image: string;

</script>


	<figure class="h-12 lg:h-20 w-auto">
		<picture class="h-12 lg:h-20 w-auto block">
			<source media="(min-width: 50px)"  srcset="/words/{image}.webp" type="image/webp"  />
			<img src="/words/{image}.png" alt={word} class="h-12 lg:h-20 w-auto" />
		</picture>
	</figure>
	<span class="sr-only">{word}</span>

<style>
</style>