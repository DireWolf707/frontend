<script>
    import LoadingButton from '$lib/Reusable/LoadingButton.svelte';
    import { userStore } from '$lib/Stores/user.js';
    import { createEventDispatcher } from 'svelte';

    const dipacth = createEventDispatcher();

    let loading = false;
    let initialState = {
        password: "",
        password1: "",
        password2: ""
    };
    let formData = {...initialState};

    const changePasswordHandler = async () => {
        loading = true;
        const err = await userStore.updatePassword(formData);
        err ? dipacth('sendNotification', {text: err}) : dipacth('sendNotification', {text: 'Password Updated!', type: 'success'});
        formData = {...initialState};
        loading = false;
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

        <LoadingButton {loading} placeholder={"change password"} />
        
    </form>
</div>