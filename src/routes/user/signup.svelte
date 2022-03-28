<script>
    let loading = false;

    let initialState = {
        email: "",
        password1: "",
        password2: "",
        username: "",
    };
    let formData = {...initialState};

    const signupHandler = () => {
        try {
            loading = true;
            setTimeout(() => {
                loading = false;
            },2000)
        } catch (error) {
            console.log(error);            
        } finally {
            formData = {...initialState};
        }
    }
</script>

<div class="border rounded-lg sm:w-2/3 lg:w-1/3 mx-auto my-20 bg-slate-100">
    <h1 class="text-center font-bold text-2xl mt-3">SIGNUP</h1>

    <form class="px-4" on:submit|preventDefault="{signupHandler}">

        <label class="label" for="">
            <span class="label-text">Email</span>
        </label>
        <input type="text" placeholder="email" bind:value="{formData.email}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">Username</span>
        </label>
        <input type="text" placeholder="username" bind:value="{formData.username}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">Password</span>
        </label>
        <input type="text" placeholder="password" bind:value="{formData.password1}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">Retype Password</span>
        </label>
        <input type="text" placeholder="retype password" bind:value="{formData.password2}"
        class="input input-bordered w-full">

        {#if !loading}
            <button class="btn btn-block my-4">Submit</button>
        {:else}
            <button class="btn btn-block loading my-4">loading</button>
        {/if}

    </form>
</div>