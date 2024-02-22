<script>
  import Button from '../components/Button.svelte'
  import { PlusCircle, Edit, Trash2, Command } from 'lucide-svelte'
  import Card from '../components/Card/Card.svelte'
  import CardTitle from '../components/Card/CardTitle.svelte'
  import Modal from '../components/Modal.svelte'
  import Label from '../components/Label.svelte'
  import Input from '../components/Input.svelte'
  import Textarea from '../components/Textarea.svelte'
  import { generateRandomId } from '../utils'
  import { confirm } from '../components/Confirm.svelte'
  import { appStore } from '../store'
  import Tag from '../components/Tag.svelte'
  import Tooltip from '../components/Tooltip.svelte'
  import HotKeys from '../components/HotKeys.svelte'
  import Key from '../components/Key.svelte'
  import {_} from "svelte-i18n";

  let editedPrompt = null
  let hotKeyPrompt = null

  let pressedKeys = []

  let modalPromptVisible = false
  let modalPromptTitle = ''
  let modalPromptValue = ''

  let modalHotkeyVisible = false

  const onClosePromptModal = () => {
    modalPromptTitle = ''
    modalPromptValue = ''
    modalPromptVisible = false
  }

  const onAddPrompt = () => {
    const newPromptItem = {
      id: generateRandomId(),
      title: modalPromptTitle,
      value: modalPromptValue
    }
    appStore.addPrompt(newPromptItem)
    onClosePromptModal()
  }

  const onRemovePrompt = async (prompt) => {
    if (
      await confirm({
        title: $_('confirmations.message_really'),
        confirmMessage: $_('actions.delete'),
        message: $_('confirmations.message_confirmDeletion')
      })
    )
      appStore.removePrompt(prompt)
  }

  const onStartToEdit = (prompt) => {
    editedPrompt = prompt
    const currentPrompt = $appStore.promptList.find((p) => p.id === prompt.id)
    modalPromptTitle = currentPrompt.title
    modalPromptValue = currentPrompt.value
  }
  const onEditPrompt = () => {
    let newPrompt = {
      ...editedPrompt,
      title: modalPromptTitle,
      value: modalPromptValue
    }

    appStore.editPrompt(editedPrompt, newPrompt)
    onClosePromptModal()
    editedPrompt = null
  }

  const onStartToHotKey = (prompt) => {
    hotKeyPrompt = prompt
  }

  const onCloseHotkeyModal = () => {
    hotKeyPrompt = null
    pressedKeys = []
    modalHotkeyVisible = false
  }

  const onSaveHotkey = () => {
    let newPrompt = {
      ...hotKeyPrompt,
      hotkeys: pressedKeys.join('+')
    }
    appStore.editPrompt(hotKeyPrompt, newPrompt)
    modalHotkeyVisible = false
  }
</script>


<div class="px-6 h-16 flex justify-between text-gray-700 items-center">
  <h1 class="text-lg font-semibold">
    {$_('prompts_view.title')}</h1>
  <Button type="secondary" size="s" on:click={() => modalPromptVisible = true}>
    <svelte:fragment slot="icon">
      <PlusCircle class="h-4 w-4" />
    </svelte:fragment>
    {$_('prompts_view.addPromptAction')}
  </Button>
</div>
<table class="w-full border-collapse bg-white text-left text-sm text-gray-500 border-t border-gray-200">
  <thead class="bg-gray-50">
  <tr>
    <th scope="col" class="px-6 py-4 font-medium text-gray-900">{$_('prompts_view.table.title')}</th>
    <th scope="col" class="px-6 py-4 font-medium text-gray-900">{$_('prompts_view.table.prompt')}</th>
    <th scope="col" class="px-6 py-4 font-medium text-gray-900">{$_('prompts_view.table.hotkey')}</th>
    <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
  </tr>
  </thead>
  <tbody class="divide-y divide-gray-100 border-t border-gray-100">
  {#each $appStore.promptList as prompt}
    <tr>
      <th class="px-6 py-4 font-medium text-gray-900 w-36">{prompt.title}</th>
      <td class="px-6 py-4">
        <div class="max-h-16 overflow-hidden" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;  display: -webkit-box;
  ">
          {prompt.value}
        </div>
      </td>
      <td class="px-6 py-4 w-36">
        <div class="flex items-center justify-center gap-1 ">
          {#if prompt.hotkeys}
            {#each prompt.hotkeys.split('+') as key }
              <Key {key} />
            {/each}
          {/if}
        </div>
      </td>

      <td class="px-6 py-4 font-medium  h-full">
        <div class="gap-2 flex justify-end items-center">
          <Tooltip message="{$_('prompts_view.table.action.defineShortcut')}">
            <button class="text-secondary-500 cursor-pointer p-1.5 rounded hover:bg-secondary-100 hover:text-secondary-700" on:click={() => {modalHotkeyVisible = true; onStartToHotKey(prompt)}}><Command size={18} /></button>
          </Tooltip>
          <Tooltip message="{$_('prompts_view.table.action.editPrompt')}">
            <button class="text-primary-700 cursor-pointer p-1.5 rounded hover:bg-primary-100 hover:text-primary-800" on:click={() => {modalPromptVisible = true; onStartToEdit(prompt)}}><Edit size={18} /></button>
          </Tooltip>
          <Tooltip message="{$_('prompts_view.table.action.deletePrompt')}">
            <button class="text-red-700 cursor-pointer p-1.5 rounded hover:bg-red-100 hover:text-red-800" on:click={() => onRemovePrompt(prompt)}><Trash2 size={18} /></button>
          </Tooltip>
        </div>
      </td>
    </tr>
  {/each}
  </tbody>
</table>


<Modal title="{$_('prompts_view.modal.addPrompt')}" bind:show={modalPromptVisible} on:close={onClosePromptModal}>
  <div class="flex flex-col gap-4 p-4 ">
    <Label value="{$_('prompts_view.modal.promptTitleLabel')}">
      <Input bind:value={modalPromptTitle} placeholder="{$_('prompts_view.modal.promptTitlePlaceHolder')}" />
    </Label>

    <Label value="{$_('prompts_view.modal.promptValueLabel')}">
      <Textarea bind:value={modalPromptValue} placeholder="{$_('prompts_view.modal.promptValuePlaceHolder')}." />
    </Label>
  </div>
  <svelte:fragment slot="actions">
    <button type="button" on:click={onClosePromptModal} class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">{$_('actions.cancel')}</button>
    <button on:click={() => editedPrompt ? onEditPrompt() : onAddPrompt()} type="button" class="rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">{$_('actions.save')}</button>
  </svelte:fragment>
</Modal>

<Modal title={$_('prompts_view.modal.defineShortcut')} bind:show={modalHotkeyVisible}>

  <div class="flex flex-col gap-4 p-4 h-48 items-center justify-center">

    <HotKeys bind:pressedKeys />

    {#if pressedKeys.length === 0}
      <Tag size="xl" class="text-center"> {$_('prompts_view.modal.startKeyPressPlaceHolder')}</Tag>
    {/if}

  </div>

  <svelte:fragment slot="actions">
    <Button type="secondary" on:click={onCloseHotkeyModal} >{$_('actions.cancel')}</Button>
    <Button on:click={() => onSaveHotkey()}> {$_('actions.save')}</Button>
  </svelte:fragment>
</Modal>
