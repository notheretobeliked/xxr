<script lang="ts">
  import { fly } from "svelte/transition"
  import { cubicOut } from "svelte/easing"
  import { onMount } from "svelte"
  import { OnMount } from 'fractils'
  import { animateScroll } from 'svelte-scrollto-element'


  const sentence: string =
		"#ThePeople don't trust the #UKGovernment. Enough is Enough !. #JustStop killing us. This is an #attackonnature on Black Lives on #OurNHS an #Attack on Britain. #togetherwearestronger if the people unite & #actnow #forthemanynotthefew #4justice & peace for wildlife 4 nature. #timeforbetterpay a #greennewdeal #foryourworld. A National act of rebellion on the #HousesOfParliament";
	let pattern: RegExp = /[#]/g
	let allwords: Array<any> = sentence.replace(pattern, '').replaceAll('.',' .').toLowerCase().split(' ')
  interface MapType {
    word: string, filename: string
  }

  let allwordsMap: Array<MapType> = []
  let filename: string
  let currentword: string
  let index: Array<any>
  
  const indexOfAll = (arr: Array<any>, val:string) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

  console.log(allwords)
  for (let i = 0; i < allwords.length; i++) {
    currentword = allwords[i]
    filename = currentword
    //console.log(currentword)
    // find index of allword[i] inside allwords
    index= indexOfAll(allwords, currentword)
    // if (index[0] == i) console.log('this is the first iteration')

    if (i != index[0]) {
      for (let j=0; j < index.length; j++) {
        if (i == index[j]) {
          filename = `${currentword}_${j+1}`
        }
      }      
    }
    allwordsMap.push({word: allwords[i], filename: filename})

    let ready:boolean = false;
    // if (allwordsMap.get(i).number != i) console.log (`word is: ${currentword} and index is: ${index} `) 

    onMount(() => {
        animateScroll.scrollToBottom({duration:15000})
    })
	}
  
  
  console.log(allwordsMap)

	import Word from '../lib/components/Word.svelte';
</script>

<p class="sr-only">{sentence}</p>

<div class="flex flex-row gap-6 w-full flex-wrap items-center align-middle justify-center max-w-6xl m-auto">
  <OnMount>

	{#each allwordsMap as {word, filename}, i }
    {#if word == '.'}
      <div class="basis-full h-4"></div>
    {:else}
      <div transition:fly={{ x: -200, delay: i * 100, duration: 200, easing: cubicOut }}>
        <Word word={word} image={filename} />
      </div>  
    {/if}
	{/each}
    </OnMount>

</div>
<div id="footer"></div>
