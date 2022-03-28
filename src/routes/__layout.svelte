<script>
    import "../app.css";
    import Header from "$lib/UI/Header.svelte";
    import Footer from "$lib/UI/Footer.svelte";
</script>

<div class="flex flex-col h-screen mx-2">
    <Header />
    <div class="mb-auto">
        <slot />
    </div>
    <Footer />
</div>