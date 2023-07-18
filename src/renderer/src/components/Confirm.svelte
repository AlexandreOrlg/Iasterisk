<script context="module">
  import {writable} from 'svelte/store';

  const params = writable(null);

  export const confirm = async (options = '') =>
    new Promise((callback) =>
      params.set({
        type: 'confirm',
        ...options,
        callback,
      })
    );

</script>

<script>
  import Button from './Button.svelte'
  import Modal from './Modal.svelte'

  export let confirmTitle = 'Confirmer'
  export let cancelTitle = 'Annuler'

  function handleSubmit() {
    $params.callback(true);
    params.set(null);
  }

  function closeModal() {
    $params.callback(false);
    params.set(null);
  }

</script>


{#if $params}
  <Modal title="{$params.title ?? ''}">
    {@html $params.message ?? ''}
    <svelte:fragment slot="actions">
      <Button type="secondary"
              on:click={closeModal}>{$params.cancelMessage ?? 'Annuler'}</Button>
      <Button type="primary"
              on:click="{handleSubmit}"> {$params.confirmMessage ?? 'Confirmer'}</Button>
    </svelte:fragment>
  </Modal>
{/if}

