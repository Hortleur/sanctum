<script lang="ts">
    const dashPages = [
        {
            id:0,
            title: 'Users',
            url: '/dashboard/users',
            icone: "fa-solid fa-users fa-xl"
        },
        {
            id:1,
            title: 'Posts',
            url: '/dashboard/posts',
            icone: "fa-solid fa-newspaper fa-xl"
        },
        {
            id:2,
            title: 'Products',
            url: '/dashboard/products',
            icone: "fa-solid fa-shopping-bag fa-xl"
        },
        {
            id:3,
            title: 'Subscribers',
            url: '/dashboard/subscribers',
            icone: "fa-solid fa-address-card fa-xl"
        },
    ]
    export let data
</script>

<main>
    {#each dashPages as page}
        <div class="card w-11/12 mx-auto my-5 shadow-xl">
            <div class="card-body justify-center">
                <i class="{page.icone} text-center"></i>
                <h2 class="card-title">{page.title}</h2>
            </div>
            <div class="card-actions justify-center mb-5">
                <a href="{page.url}" class="btn btn-primary">Aller</a>
            </div>
        </div>

    {/each}
</main>