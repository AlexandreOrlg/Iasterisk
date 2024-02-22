<script>
  import { _ } from "svelte-i18n";
  import { appStore } from "../store";
  import * as differ from "diff";
  import { timeSince } from "../utils";

  console.log(differ);
</script>


<div class="px-6 h-16 flex justify-between text-gray-700 items-center">
  <h1 class="text-lg font-semibold">
    {$_('history_view.title')}
  </h1>
</div>

<div class="flex flex-col overflow-y-scroll h-full divide-y divide-solid divide-slate-300">
  {#each $appStore.history as item}
    {@const diffs = differ.diffWords(item['origin'], item['result'])}
    <div class="py-2 px-4">
      {#each diffs as diff}
        <span
          class="{diff.added ? 'text-green-600 bg-green-100 mr-1 rounded px-0.5' : ''} {diff.removed ? 'text-red-600 bg-red-100 mr-1 line-through rounded px-0.5' : ''}">{ diff.value} </span>
      {/each}
      <div class="text-right text-slate-400 text-xs italic">
      {  timeSince(item['date']) ?? ''}
      </div>
    </div>
  {/each}
</div>

