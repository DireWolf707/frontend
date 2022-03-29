<script>
    export let loading;
    export let placeholder;
</script>

{#if !loading}
    <button class="btn btn-block my-4">{placeholder}</button>
{:else}
    <button class="btn btn-block loading my-4">loading</button>
{/if}