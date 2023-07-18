<script>
  export let id = ''
  export let placeholder = 'placeholder'
  export let value
</script>

<textarea
  id="{id}"
  bind:value
  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50" rows="10" placeholder="{placeholder}"></textarea>

