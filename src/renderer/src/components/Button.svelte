<script>
  export let type = 'primary'
  export let size = 'default'

  const classType = {
    primary:
      'border-primary-500 bg-primary-500 hover:border-primary-700 hover:bg-primary-700 focus:ring-primary-200 disabled:border-primary-300 disabled:bg-primary-300 text-white',
    secondary:
      'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-100 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
  }

  const classSize = {
    default: 'px-5 py-2.5',
    s: 'px-4 py-2'
  }

  let className = ''

  export {className as class}
</script>

<button type="button" class="{className} {classType[type]} {classSize[size]} rounded-lg border text-center text-sm
                             font-medium shadow-sm transition-all focus:ring disabled:cursor-not-allowed
                              { $$slots.icon ? 'inline-flex items-center gap-1.5' : ''}"
        on:click
>
  <slot name="icon"/>
  <slot />
</button>
