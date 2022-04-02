<script>
    import { userStore } from '$lib/Stores/user.js';

    const logoutHandler = async () => {
        await userStore.logout()
    }
</script>

<div class="navbar bg-neutral text-neutral-content rounded-b-lg">

    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
    </div>

    <div class="flex-none">

        {#if $userStore}
            <span class="opacity-60 mr-1">{$userStore.username}</span>
            <div class="dropdown dropdown-end">
                <button class="btn btn-ghost rounded-full">
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                </button>
                <ul class="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52 mt-3">
                    <li>
                        <a href="/user/account">Account</a>
                    </li> 
                    <li>
                        <button on:click="{logoutHandler}">Logout</button>
                    </li>
                </ul>
            </div>
        {:else}
            <a href="/user/login" class="btn btn-ghost rounded-btn">
                Login
            </a>
            <a href="/user/signup" class="btn btn-ghost rounded-btn">
                Signup
            </a>
        {/if}

    </div>

</div>