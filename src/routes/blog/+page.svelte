<script>
    export let data
    let blogPosts = data.blogPosts
</script>

<main class="">
    <h1 class="text-4xl text-center underline-offset-4 underline font-chivo mb-5">Blog</h1>
    <section class="bg-prim-grey py-5">
        <h2 class=" font-chivo text-3xl pl-5 underline mb-5">Bienvenue sur notre page blog !</h2>
        <p class="pl-2">Ici, vous trouverez une variété d'articles sur les desserts africains, les tendances culinaires, les recettes, les histoires d'entrepreneurs, et bien plus encore. Notre équipe d'auteurs passionnés vous apporte des articles frais et inspirants chaque semaine. N'hésitez pas à explorer notre collection et à vous abonner à notre newsletter pour rester à jour avec les dernières nouvelles.</p>
    </section>
    <section class="py-5 lg:flex lg:flex-row lg:flex-wrap">
        {#each blogPosts as post}
            <div class="card w-11/12 lg:w-96 mx-auto shadow-lg my-10">
                <figure class="max-h-80">
                    <img src="{post.image}" alt="{post.title}" >
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{post.title}</h2>
                    <p class="text-justify">{post.content}</p>
                    <div class="flex flex-row justify-between items-end">
                        <p>{new Intl.DateTimeFormat('fr-FR').format(post.createdAt)}</p>
                        <p class="italic">{post.author.name}</p>
                    </div>
                </div>
            </div>
        {/each}
    </section>
</main>