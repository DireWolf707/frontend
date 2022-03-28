<div class="navbar bg-neutral text-neutral-content rounded-b-lg">

    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
    </div>

    <div class="flex-none">

        <a href="/user/login" class="btn btn-ghost rounded-btn">
            Login
        </a>

        <a href="/user/signup" class="btn btn-ghost rounded-btn">
            Signup
        </a>
        
        <div class="dropdown dropdown-end">
            <button class="btn btn-ghost rounded-btn">
                Dropdown
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </button>
            <ul class="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52 mt-3">
                <li>
                    <a href="/user/account">Account</a>
                </li> 
                <li>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </div>

    </div>

</div>