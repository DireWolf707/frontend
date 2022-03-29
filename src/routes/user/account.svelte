<script>
    import Profile from "$lib/User/Profile.svelte";
    import Password from "$lib/User/Password.svelte";

    const menuOptions = ['profile','password'];
    let selectedMenu = menuOptions[0];
</script>

<div class="flex mx-2 sm:mx-6 my-8">

    <div class="w-3/12">
        <ul class="menu menu-compact lg:menu-normal bg-base-100 w-full border rounded-xl font-semibold">
            <li on:click="{ ()=>{ selectedMenu = menuOptions[0] } }"><button class:active={selectedMenu == menuOptions[0]}>Personal Info</button></li>
            <li on:click="{ ()=>{ selectedMenu = menuOptions[1] } }"><button class:active={selectedMenu == menuOptions[1]}>Change Password</button></li>
          </ul>
    </div>

    <div class="w-9/12">
        {#if selectedMenu == menuOptions[0]}
            <Profile />
        {:else if selectedMenu == menuOptions[1]}
            <Password />
        {/if}
    </div>

</div>