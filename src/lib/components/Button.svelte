<script lang="ts">
	export let label: string
</script>

<div class="hover:cursor-pointer transition-all button-container bg-pink hover:bg-yellow hover:border-black hover:border h-full p-1 lg:p-2 my-3 flex items-center justify-center text-center text-black">
  {label}
</div>

<style>
.button-container:hover {
  transform: rotate(3deg);
}

</style>