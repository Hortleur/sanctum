<script lang="ts">
import type { PageData } from '$lib/types';
import {invalidateAll} from "$app/navigation";
import {applyAction, enhance} from "$app/forms";
    export let data: PageData
</script>

<nav class="flex flex-row justify-between items-center p-2 ">
    <div class="flex flex-row flex-nowrap">
        {#if data.pathname !== '/dashboard'}
            <a href="/dashboard" class="mr-5"><i class="fa-solid fa-arrow-left fa-xl"></i></a>
            {:else }
            <a href="/" class="mr-5"><i class="fa-solid fa-home fa-xl"></i></a>
        {/if}
        <p>Hello {data.user.name} !</p>
    </div>
    <div>
        <form action="/logout" method="POST" use:enhance={ () => {
          return async({result}) => {
              invalidateAll();
              await applyAction(result)
          }
        }}>
            <button type="submit" class="btn btn-primary">Logout</button>
        </form>
    </div>
</nav>
<slot/>


