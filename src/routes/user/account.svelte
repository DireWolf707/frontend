<script>
    import Profile from "$lib/User/Profile.svelte";
    import Password from "$lib/User/Password.svelte";
    import { getNotificationsContext } from 'svelte-notifications';
    import notification from '$lib/Utils/notification';

    const { addNotification } = getNotificationsContext();

    const menuOptions = ['profile','password'];
    let selectedMenu = menuOptions[0];

    const sendNotification = (e) => {
        notification(addNotification, e.detail);
    }
</script>

<div class="flex flex-col md:flex-row md:mx-6 my-8">

    <div class="divider mb-10 mx-6 md:hidden">
        <span class="font-semibold">
            Menu
        </span>
    </div>

    <div class="w-5/6 md:w-3/12 mx-auto">
        <ul class="menu menu-normal bg-base-100 w-full border rounded-xl font-semibold">
            <li on:click="{ ()=>{ selectedMenu = menuOptions[0] } }"><button class:active={selectedMenu == menuOptions[0]}>Personal Info</button></li>
            <li on:click="{ ()=>{ selectedMenu = menuOptions[1] } }"><button class:active={selectedMenu == menuOptions[1]}>Change Password</button></li>
          </ul>
    </div>

    <div class="divider my-10 mx-6 md:hidden">
        <span class="font-semibold">
            Options
        </span>
    </div>

    <div class="md:w-9/12">
        <div class="w-5/6 md:w-2/3 mx-auto">
            {#if selectedMenu == menuOptions[0]}
                <Profile on:sendNotification={sendNotification} />
            {:else if selectedMenu == menuOptions[1]}
                <Password on:sendNotification={sendNotification} />
            {/if}
        </div>
    </div>

</div>