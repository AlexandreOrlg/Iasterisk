<script>
  import Notifications from './components/Notifications.svelte'
  import Confirm from './components/Confirm.svelte'
  import Viewport from '@danielsharkov/svelte-router/Viewport'
  import router from './router'
  import Sidebar from './components/Sidebar/Sidebar.svelte'
  import SidebarItem from './components/Sidebar/SidebarItem.svelte'
  import { MessageCircle, Settings, History } from 'lucide-svelte'
  import { _ } from 'svelte-i18n'
</script>

<div class="bg-gray-50 relative">

  <div class="main-layout">
    <Sidebar>
      <SidebarItem icon={MessageCircle} label="{$_('menu.prompt')}" route="prompts" />
      <SidebarItem icon={History} label={$_('menu.history')} route="history" />
      <SidebarItem icon={Settings} label={$_('menu.settings')} route="settings" />
    </Sidebar>

    <div class="main-content block shadow-md rounded-tl-lg z-10 border border-gray-200 mt-4 bg-white">

      <Viewport {router} />

    </div>
  </div>
</div>
<Notifications />
<Confirm />

<style>
  .main-layout {
    display: grid;
    grid-template-columns:200px 1fr;
  }

</style>
