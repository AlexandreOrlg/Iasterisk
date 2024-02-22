<script>
  import router from "../../router";
  export let icon
  export let label
  export let route

  console.log();
</script>

<li>
  <a href="#"
     class="{$router.location.name === route ? 'bg-gray-200/80' : 'hover:bg-gray-200/80'}
     text-gray-800 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"

     on:click={() => router.push(route)}
  >

      <svelte:component this={icon} strokeWidth={1.8} />
    {label}
  </a>
</li>
