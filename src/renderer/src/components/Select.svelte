<script>
export let value
export let datas = []
</script>
<select bind:value={value} class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
  {#each datas as data}
    <option value={data.id}>{data.value}</option>
  {/each}
</select>
