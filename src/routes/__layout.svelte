<script>
    import "../app.css";
    import Header from "$lib/UI/Header.svelte";
    import Footer from "$lib/UI/Footer.svelte";
    import LoadingBar from "$lib/Reusable/LoadingBar.svelte";
    import { userStore, getUser } from '$lib/Stores/user.js';
    import { onMount } from "svelte";
    
    let loading = true;
    onMount(async () => {
        const [ data, err ] = await getUser();
        // !err and data => login success
        // err and !data => login fail
        // err and data => server down
        if (err && data) {
            console.log(data);
        } else {
            userStore.set(data);
            loading = false;
        }
    })
</script>

<div class="flex flex-col h-screen mx-2">
    {#if !loading}
        <Header />
        <div class="mb-auto">
            <slot />
        </div>
        <Footer />
    {:else}
        <LoadingBar />
    {/if}
</div>