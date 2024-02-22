<script>
  import Tag from "./Tag.svelte";
  import Key from './Key.svelte'

  let keydownTimeout
  export let pressedKeys = []
  let shouldReset = false

  const handleKeydown = ({ key }) => {
    clearTimeout(keydownTimeout)

    if (shouldReset || !pressedKeys.includes(key)) {
      pressedKeys = shouldReset ? [key] : [...pressedKeys, key]
      shouldReset = false
    }

    keydownTimeout = setTimeout(() => {
      shouldReset = true
    }, 500)
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex items-center justify-center">
  {#each pressedKeys as key, i}
    {#if i > 0}
      <span class="mx-2 font-bold text-secondary-500">+</span>
    {/if}
    <Key {key} size="xl" />
  {/each}
</div>
