<script>
    // @ts-nocheck
    import LoadingButton from '$lib/Reusable/LoadingButton.svelte';
    import { userStore } from '$lib/Stores/user.js';
    import { onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    const dipacth = createEventDispatcher();

    let user;
    const userUnsub = userStore.subscribe( _user => user = _user);
    onDestroy(userUnsub);

    let loading = false;
    let formData = {...user};

    const changeProfileHandler = async () => {
        loading = true;
        const resp = await userStore.updateUser(formData);
        dipacth('sendNotification', resp);
        formData = {...user};
        loading = false;
    }
</script>

<div>
    <h1 class="text-2xl font-bold mb-2">Profile</h1>

    <form class="sm:m-4" on:submit|preventDefault="{changeProfileHandler}">

        <label class="label" for="">
            <span class="label-text">Full Name</span>
        </label>
        <input type="text" placeholder="full name" bind:value="{formData.name}"
        class="input input-bordered w-full">

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

        <LoadingButton {loading} placeholder={"update profile"} />
        
    </form>
</div>