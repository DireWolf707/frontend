<script>
    import LoadingButton from '$lib/Reusable/LoadingButton.svelte';
    import { userStore } from '$lib/Stores/user.js';
    import { getNotificationsContext } from 'svelte-notifications';
    import notification from '$lib/Utils/notification';
    
    const { addNotification } = getNotificationsContext();

    let loading = false;
    let initialState = {
        email: "mail@mail.com",
        password1: "popin123",
        password2: "popin123",
        username: "popin12345",
        name: "popin",
    };
    let formData = {...initialState};

    const signupHandler = async () => {
        loading = true;
        const resp = await userStore.signUp(formData);
        notification(addNotification, resp);
        formData = {...initialState};
        loading = false;
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
            <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="fullname" bind:value="{formData.name}"
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

        <LoadingButton {loading} placeholder={"submit"} />

    </form>
</div>