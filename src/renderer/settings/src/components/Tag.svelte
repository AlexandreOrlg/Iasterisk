<script>
  export let size = 's'

  let classSize = {
    s: 'px-2 py-1 text-xs',
    xl: 'px-4 py-1.5 text-lg'
  }

  let className = ''

  export {className as class}
</script>

<span class="rounded-md bg-secondary-100 {classSize[size]} font-semibold text-secondary-700 {className}"> <slot></slot> </span>
