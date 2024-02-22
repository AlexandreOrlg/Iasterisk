<script>
   let className = ''
   export {className as class}
</script>

<div class="mx-auto w-full rounded-lg bg-white shadow-sm border border-gray-300 overflow-hidden {className}">
    <slot name="title"> </slot>
    <slot/>
</div>
