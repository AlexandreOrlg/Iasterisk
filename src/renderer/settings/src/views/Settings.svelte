<script>
import { _, locale, locales } from "svelte-i18n";
import Label from "../components/Label.svelte";
import { appStore } from "../store";
import Input from "../components/Input.svelte";
import Button from "../components/Button.svelte";
import {notify} from "../components/Notifications.svelte";
import Select from "../components/Select.svelte";
import { PlusCircle, RefreshCcw } from "lucide-svelte";
import { localToEmoji } from "../utils";


let apiKeyValue = $appStore.apiKey

const onUpdateApiKey = () => {
  appStore.setApiKey(apiKeyValue)
  notify({ title: $_('confirmations.message_successSave') })
}
</script>


<div class="px-6 h-16 flex justify-between text-gray-700 items-center border-b border-gray-200">
  <h1 class="text-lg font-semibold">
    {$_('settings_view.title')}
  </h1>
</div>

  <div class="flex flex-col gap-4 p-4 ">
    <Label value="{$_('settings_view.languageLabel')} :">
      <Select bind:value={$locale} datas={$locales.map((l) => ({ id: l, value: localToEmoji(l) + ' - ' + l }))}></Select>
    </Label>
  </div>
  <div class="flex flex-col gap-4 p-4 ">
    <div class="flex w-full gap-4 items-end">
    <Label value="{$_('settings_view.apiKeyLabel')}" class="w-full">
      <svelte:fragment slot="suffix">
        (<a href="https://platform.openai.com/account/api-keys" class="text-primary-500 underline text-xs" target="_blank">{$_('settings_view.action.createApiKey')}</a>)
        :
      </svelte:fragment>
      <Input type="password" bind:value={apiKeyValue} placeholder="SK-XX" />
    </Label>
    <Button class="flex-shrink-0 h-auto inline" on:click={onUpdateApiKey}>
      <svelte:fragment slot="icon">
        <RefreshCcw class="h-4 w-4"  />
      </svelte:fragment>
      {$_('settings_view.action.updateAPIKey')}
    </Button>
    </div>
  </div>


<style>
  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  }
</style>
