<script>
  import {fade} from 'svelte/transition';
  import {flip, offset, shift} from "svelte-floating-ui/dom";
  import {createFloatingActions} from "svelte-floating-ui";


  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: "absolute",
    placement: "top",
    middleware: [
      offset(8),
      flip(),
      shift(),
    ]
  });

  let showTooltip = false;
  export let message = ""

</script>

<button
  on:mouseenter={() => showTooltip = true}
  on:mouseleave={() => showTooltip = false}
  use:floatingRef
>
  <slot></slot>
</button>
{#if showTooltip}
    <div
      transition:fade={{duration: 200 }}
      class="relative bg-white border border-slate-300 border-solid shadow py-1 px-2 z-50 rounded text-slate-700 text-sm"
      use:floatingContent>
      {message}
    </div>
{/if}

<style>
  .arrow:after, .arrow:before {
    @apply border-slate-300 h-3 w-3 rounded-br;
  }
</style>
