<script>
    import LoadingButton from '$lib/Reusable/LoadingButton.svelte';
    import { userStore } from '$lib/Stores/user.js';
    import { getNotificationsContext } from 'svelte-notifications';
    import notification from '$lib/Utils/notification';
    
    const { addNotification } = getNotificationsContext();

    let loading = false;
    let initialState = {
        username: "john123",
        password: "popin123"
    };
    let formData = {...initialState};

    const loginHandler = async () => {
        loading = true;
        const err = await userStore.loginIn(formData);
        err ? notification(addNotification, err) : notification(addNotification, 'Logged In!', 'success');
        formData = {...initialState};
        loading = false;
    }
</script>

<div class="border rounded-lg sm:w-2/3 lg:w-1/3 mx-auto my-20 bg-slate-100">
    <h1 class="text-center font-bold text-2xl mt-3">LOGIN</h1>

    <form class="px-4" on:submit|preventDefault="{loginHandler}">

        <label class="label" for="">
            <span class="label-text">Username</span>
        </label>
        <input type="text" placeholder="username" bind:value="{formData.username}"
        class="input input-bordered w-full">

        <label class="label" for="">
            <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" bind:value="{formData.password}"
        class="input input-bordered w-full">

        <LoadingButton {loading} placeholder={"submit"} />
        
    </form>
</div>