<script context="module">
  import { get, writable } from "svelte/store";

  let notifications = writable([])

  export const notify = (options = {}) => {
    notifications.update((n) => {
      return [...n, options]
    })

    setTimeout(() => {
      notifications.update((n) => {
        return n.filter((notification) => notification !== options)
      })
    }, options.duration ?? 3000) // remove after 5 seconds
  }
</script>
<script>
  import { fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
</script>


<div class="space-y-5 absolute left-0 right-0 bottom-4">
  {#each $notifications as notification}
    <div
      transition:fly="{{ y: 50, duration: 600, easing: quintOut }}"
      class="relative mx-auto max-w-[400px] rounded-xl border border-secondary-50 bg-white p-4 text-sm shadow-lg">
      <div class="flex space-x-4 items-center">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="flex-1">
          {#if notification.title}
            <h4 class="pr-6 font-medium text-secondary-900">{notification.title}</h4>
          {/if}
          {#if notification.text}
            <div class="mt-1 text-secondary-500">{notification.text}</div>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>

</style>
