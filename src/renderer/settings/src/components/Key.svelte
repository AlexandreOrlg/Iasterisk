<script>
  import Tag from "./Tag.svelte";
  import { Command, ArrowBigUpDash } from 'lucide-svelte'

  export let key

  export let size = 's'

  let svgSize = {
    s: 14,
    xl: 28
  }

  let svgClass = {
    s: '',
    xl: 'py-1'
  }

</script>

{#if key === 'Meta' || key === 'Control'}
  <Tag {size} class="inline-block"> <Command class="{svgClass[size]}" strokeWidth={2.5} size={svgSize[size]}/> </Tag>
{:else if key === 'Shift'}
  <Tag {size} class="inline-block"> <ArrowBigUpDash class="{svgClass[size]}" strokeWidth={2.5} size={svgSize[size]}/> </Tag>
{:else}
  <Tag {size}> {key} </Tag>
{/if}
