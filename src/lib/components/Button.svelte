<script lang="ts">
	export let label: string
</script>

<div class="relative hover:cursor-pointer button-container fill-pink hover:fill-yellow h-full">
	<div class="absolute top-0 bottom-0 right-0 left-0 z-0">
		<svg
			width="100%"
			height="100%"
			preserveAspectRatio="none"
			viewBox="0 0 294 97"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="svg-bg"
		>
			<path
				d="M146.97 82.07L134.47 93.47L122.26 82.47L109.17 94.4L93.92 82.19L82.41 94.35L68.73 82.13L46.51 96.33L48.57 78.09L17.92 94.71L29.17 71.83L6.21 76.85L17.25 57.47L0 48.16L17.25 38.87L6.21 19.48L29.17 24.5L17.92 1.62L48.57 18.23L46.51 0L68.73 14.21L82.41 1.98L93.92 14.14L109.17 1.93L122.26 13.87L134.47 2.87L146.97 14.26H147L159.5 2.87L171.72 13.87L184.81 1.93L200.05 14.14L211.56 1.98L225.25 14.21L247.46 0L245.4 18.23L276.05 1.62L264.8 24.5L287.77 19.48L276.73 38.87L293.97 48.16L276.73 57.47L287.77 76.85L264.8 71.83L276.05 94.71L245.4 78.09L247.46 96.33L225.25 82.13L211.56 94.35L200.05 82.19L184.81 94.4L171.72 82.47L159.5 93.47L147 82.07H146.97Z"
			/>
		</svg>
	</div>
	<div class="relative z-10 p-3 lg:p-6 text-black text-center py-20 h-full flex items-center justify-center">{label}</div>
</div>

<style>
	.button-container path {
		@apply fill-pink transition-colors duration-500;
	}
	.button-container:hover path {
		@apply fill-yellow stroke-pink stroke-2;
	}
</style>
