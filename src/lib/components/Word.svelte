<script lang="ts">
	export let word: string;
	export let image: string;

</script>


	<figure>
		<picture>
			<source media="(min-width: 50px)"  srcset="/words/{image}.webp" type="image/webp"  />
			<img src="/words/{image}.png" alt={word} />
		</picture>
	</figure>
	<span class="sr-only">{word}</span>

<style>
  figure {
    height: 100px;
  }
  img {
    height: 100%;
  }
</style>