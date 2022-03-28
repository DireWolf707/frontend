<script>
    let loading = false;

    let initialState = {
        email: "",
        password: ""
    };
    let formData = {...initialState};

    const loginHandler = () => {
        try {
            loading = true;
            setTimeout(() => {
                loading = false;
            },2000)
        } catch (error) {
            console.log(error);            
        } finally {
            formData = initialState;
        }
    }
</script>

<div class="border rounded-lg w-1/3 mx-auto my-20 bg-slate-100">
    <h1 class="text-center font-bold text-2xl mt-3">LOGIN</h1>
    <form class="p-4" on:submit|preventDefault="{loginHandler}">
        <label class="input-group">
            <span class="w-1/5 mr-2 bg-slate-300">Email</span>
            <input type="text" placeholder="info@site.com" bind:value="{formData.email}"
            class="input input-bordered input-success w-4/5">
        </label>
        <label class="input-group mt-2">
            <span class="w-1/5 mr-2 bg-slate-300">Password</span>
            <input type="text" placeholder="password" bind:value="{formData.password}"
            class="input input-bordered input-success w-4/5">
        </label>
        {#if !loading}
            <button class="btn btn-block mt-3">Submit</button>
        {:else}
            <button class="btn btn-block loading mt-3">loading</button>
        {/if}
    </form>
</div>