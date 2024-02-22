<script>
  export let id = ''
  export let placeholder = 'placeholder'
  export let value

  export let type = 'text'
</script>

{#if type === "text"}
<input type="text"
       id="{id}"
       bind:value
       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="{placeholder}" />

  {:else if type === "password"}
  <input type="password"
         id="{id}"
         bind:value
         class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="{placeholder}" />

{/if}
