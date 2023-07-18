<script>
import logo from "../../../../../resources/icon.png";
</script>

<div class="h-screen flex w-full flex-col">
  <!-- Sidebar component, swap this element with another sidebar if you like -->
  <div class="flex grow flex-col gap-y-5 overflow-y-auto px-6">
    <div class="flex h-16 shrink-0 gap-2 items-center font-semibold">
      <img class="h-12 w-auto" src="{logo}" alt="Your Company">
      Aisterisk
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <slot />
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>
