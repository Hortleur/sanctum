<script lang="ts">
    import type { PageData } from '$lib/types'

    export let data: PageData
</script>

<main class="pt-20 ">
    <div class="flex flex-row justify-center items-baseline">
        <h1 class="text-4xl text-center underline-offset-4 underline font-chivo mb-5 mr-2">Nos Produits</h1>
        <span class="badge badge-primary no-underline">{data.products.length}</span>
    </div>


    <section>
        {#each data.products as {id, name, description, picture}}
            <div class="card w-11/12 rounded-lg shadow-lg mx-auto my-5">
                <figure>
                    <img src="{picture}" alt="{name}">
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p class="text-justify">{description}</p>
                </div>
            </div>
        {/each}

    </section>
</main>