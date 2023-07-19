<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from 'svelte/transition';


  export let show = true;
  export let title = ''

  const dispatch = createEventDispatcher();

  const onClose = () => {
    show = false
    dispatch('close')
  }
</script>

{#if show}
<div class="absolute z-50" transition:fade={{duration : 300}}>
    <div class="fixed inset-0 z-10 bg-secondary-700/50"></div>
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0" transition:fly={{ y: 50, duration: 300 }}>
      <div class="mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl">
        <div class="relative p-6">
          <button on:click={onClose}  type="button"  class="absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-secondary-500 transition-all hover:bg-secondary-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
          <h3 class="text-lg font-medium text-secondary-900">{title}</h3>
            <slot />
        </div>
        <div class="flex justify-end gap-3 bg-secondary-50 px-6 py-3">
          <slot name="actions">
            <button type="button" class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">Annuler</button>
            <button type="button" class="rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Confirmer</button>
          </slot>
        </div>
      </div>
    </div>
</div>
{/if}
