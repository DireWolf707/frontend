<script>
    import LoadingButton from '$lib/Reusable/LoadingButton.svelte';

    let loading = false;
    let initialState = {
        fullName:"",
        email: "",
        username: ""
    };
    let formData = {...initialState};

    const changeProfileHandler = () => {
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
  <h1 class="text-2xl font-bold mb-2">Profile</h1>

  <form class="sm:m-4" on:submit|preventDefault="{changeProfileHandler}">

      <label class="label" for="">
          <span class="label-text">Full Name</span>
      </label>
      <input type="text" placeholder="full name" bind:value="{formData.fullName}"
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