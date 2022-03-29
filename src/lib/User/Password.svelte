<script>
    let loading = false;

    let initialState = {
        password:"",
        password1: "",
        password2: ""
    };
    let formData = {...initialState};

    const changePasswordHandler = () => {
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

<div class="w-2/3 mx-auto">
    <h1 class="text-2xl font-bold mb-2">Change Password</h1>

    <form class="sm:m-4" on:submit|preventDefault="{changePasswordHandler}">

        <label class="label" for="">
            <span class="label-text">Current Password</span>
        </label>
        <input type="text" placeholder="current password" bind:value="{formData.password}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">New Password</span>
        </label>
        <input type="text" placeholder="new password" bind:value="{formData.password1}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">Retype New Password</span>
        </label>
        <input type="text" placeholder="retype new password" bind:value="{formData.password2}"
        class="input input-bordered w-full">

        {#if !loading}
            <button class="btn btn-block mt-4">Change Password</button>
        {:else}
            <button class="btn btn-block loading mt-4">loading</button>
        {/if}
        
    </form>
</div>