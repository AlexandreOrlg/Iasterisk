<script>
 export let id = ''
 export let value
 export let required = false;

 let requiredClass = "after:ml-0.5 after:text-red-500 after:content-['*']"

 let className = ''

 export {className as class}

</script>



  <div class="{className}">
    <label for="{id}" class="mb-1 block text-sm font-medium text-gray-700 {required ? requiredClass :''}">
      {value}
      <slot name="suffix" />
    </label>
      <slot/>
  </div>

