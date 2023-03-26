<script lang="ts">
    import {applyAction, enhance} from "$app/forms";
    import type {ActionData} from './$types';
    import {invalidateAll} from "$app/navigation";

    export let form: ActionData;
</script>

<main>
    <h1 class="mt-10 text-center text-4xl font-chivo">Log In</h1>
    <div class="mt-10 flex flex-col items-center justify-center">
        <form action="?/login" method="POST" class="flex flex-col " use:enhance={ () => {
          return async({result}) => {
              invalidateAll();
              await applyAction(result)
          }
        }}>
            <label for="email" class="flex flex-col">
                Email:
                <input type="text" autocomplete="email" name="email" id="email" class="input input-primary" placeholder="Email" required>
            </label>
            <label for="password" class="flex flex-col mt-5">
                Password:
                <input type="password" autocomplete="current-password" name="password" id="password" class="input input-primary" required placeholder="Password">
            </label>
            {#if form?.invalid}
                <p class="text-error">Email et mot de passe requis</p>
            {/if}
            {#if form?.credentials}
                <p class="text-error">Mauvais identifiants</p>
            {/if}
            <button type="submit" class="btn btn-primary mt-5">Log In</button>
        </form>

    </div>
    <div>
        <figure class="w-1/2 mx-auto mt-5">
            <img src="images/sanctum.svg" alt="Logo Sanctum" class="">
        </figure>
    </div>

</main>
