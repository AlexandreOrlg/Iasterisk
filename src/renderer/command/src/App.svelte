<script>
  import { diffWords } from "diff/lib/diff/word"
  import { onMount } from "svelte"

  let isLoading = false
  let editedText = ""
  let initialText = ""
  let type = "FREE"

  window.update((e) => {
    if (!e.initialText && !e.editedText) return
    isLoading = e.loading ?? false
    editedText = e.editedText ?? null
    initialText = editedText ? e.initialText.slice(0, e.editedText.length) : e.initialText
    type = e.type
  })

  let value = ""
  let inputEl

  onMount(async () => {
    if(inputEl)
      inputEl.focus();
  })

</script>

<div class="main">
  <div class="h-full w-full {isLoading ? "flex items-center justify-center" : ""}">
      {#if isLoading}
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      {:else }

        {#if type === "CORRECTION"}
          {@const diffs = diffWords(initialText, editedText)}
          <div class="py-2 px-4">
            {#each diffs as diff}
                <span
                  class="{diff.added ? 'text-green-600 bg-green-100 mr-1 rounded px-0.5' : ''} {diff.removed ? 'text-red-600 bg-red-100 mr-1 line-through rounded px-0.5' : ''}">{ diff.value} </span>
            {/each}
          </div>
        {:else}
          <input type="text" bind:value bind:this={inputEl} class="w-full border border-b border-slate-300 placeholder-slate-400" placeholder="Prompt..."/>
          {value}
          {type} - {initialText} - {editedText}
          dsqqdsdqs
        {/if}

  {/if}
</div>

<div class="bac flex justify-end px-2 bg-slate-100/50 border-t border-slate-200 gap-2 items-center shrink-0">
  <div class=" bg-slate-100 border-slate-200 border rounded py-0.5 px-1 text-slate-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-left">
      <polyline points="9 10 4 15 9 20" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </svg>
  </div>
  <div class="text-xs font-medium text-slate-500">
    Appuyer sur entrer pour accepter les modifications
  </div>
</div>
</div>

<style>
  .main {
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr 34px;
  }

</style>


